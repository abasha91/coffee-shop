import { Fragment, useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';

import CoffeeLogo from '../../assets/coffee-logo-png-image.png';
import { CartContext } from '../../contexts/cart.context';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import './navigation.styles.scss'

const Navigation = () =>{
    const {isCartOpen} = useContext(CartContext)

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo' to='/'>
                    <img src={CoffeeLogo} alt="Logo" className='photo-logo' />
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation