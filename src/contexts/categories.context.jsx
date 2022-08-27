import { useEffect } from "react";
import { createContext, useState } from "react";

// import SHOP_DATA from "../shop-data.js";
import {
    // addCollectionAndDocuments,
    getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap };

    //* To add data to the fireStore
    // useEffect(() => {
    //     addCollectionAndDocuments("categories", SHOP_DATA);
    // }, []);

    //* To get the data from the fireStore
    useEffect(() => {
        (async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        })();
    }, []);

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};
