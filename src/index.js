import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";
import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.querySelector("#root")).render(
    // <React.StrictMode>
    // </React.StrictMode>
    <BrowserRouter>
        <UserProvider>
            <CategoriesProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </CategoriesProvider>
        </UserProvider>
    </BrowserRouter>
);
