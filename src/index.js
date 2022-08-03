import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./contexts/user.context";
import App from "./App";

import "./index.scss";

ReactDOM.createRoot(document.querySelector("#root")).render(
    // <React.StrictMode>
    // </React.StrictMode>
    <BrowserRouter>
        <UserProvider>
            <App />
        </UserProvider>
    </BrowserRouter>
);
