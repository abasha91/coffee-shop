
import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../contexts/categories.constext";
import CategroyPreview from "../../components/category-preview/category-preview";

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);

    return(
        <Fragment>
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return <CategroyPreview key={title} title={title} products={products} />
            })}
        </Fragment>
    )
}

export default CategoriesPreview