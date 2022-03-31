import { createContext, useEffect, useState } from "react";

import MENU from '../menu-data.js'

export const CategoriesContext = createContext({
    categoriesMap: {},
  });
  
  export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
  
    useEffect(() => {
      const getCategoriesMap = async () => {

        const acc = []
        MENU.map( (category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
        })

        const categoryMap = acc;

        setCategoriesMap(categoryMap);
      };
  
      getCategoriesMap();
    }, []);
  
    const value = { categoriesMap };
    return (
      <CategoriesContext.Provider value={value}>
        {children}
      </CategoriesContext.Provider>
    );
  };