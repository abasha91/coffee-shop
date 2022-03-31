import {createContext, useEffect, useState} from 'react';

const applyDiscount = (cartItems) => {
    const discountPackage   = {combo_items: [2,18,23,10], discount: 2.2}
    
    const applyDiscountFilter = cartItems.filter(
        (cartItem) => discountPackage.combo_items.includes(cartItem.id)
    )
    var discount = 0;
    if (applyDiscountFilter.length === discountPackage.combo_items.length){
        var minQunitity = 100;
        applyDiscountFilter.map((prodcut) => 
            minQunitity = prodcut.quantity < minQunitity ? prodcut.quantity : minQunitity
        )
        discount = minQunitity * discountPackage.discount;
    }

    return discount;
}

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem){
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem)
        
    }

    return [...cartItems, {...productToAdd, quantity:1}];
}

const removeCartItem = (cartItems, productToRemove, removeWholeItem) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );

    if (existingCartItem.quantity === 1 || removeWholeItem ){
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
    }

    return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id 
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeCartFromItem: () => {},
    cartTotal: 0,
    totalPrice: 0,
    totalTax: 0,
    totalDiscount: 0
})

export const CartProvidor = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [totalTax, setTotalTax] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove, removeWholeItem) => {
        setCartItems(removeCartItem(cartItems, productToRemove, removeWholeItem));
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        const discount = applyDiscount(cartItems);
        setCartTotal(Math.round((newCartTotal - discount) * 100) / 100);
        setTotalDiscount(Math.round(discount * 100) / 100);

    }, [cartItems])

    useEffect(() => {
        const newTaxTotal = cartItems.reduce((totalTax, cartItem) => totalTax + cartItem.quantity * cartItem.price * cartItem.tax, 0);
        setTotalTax(Math.round(newTaxTotal * 100) / 100);
    }, [cartItems])

    const value = {
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        cartItems, 
        cartCount,
        removeItemFromCart,
        cartTotal,
        totalTax,
        totalDiscount
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}