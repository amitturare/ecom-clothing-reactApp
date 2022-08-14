import { createContext, useState, useEffect } from "react";

//  Helper function to match the repeating products in the cartItem array
const addCartItem = (cartItemsArr, productToAdd) => {
    const itemFound = cartItemsArr.find((item) => item.id === productToAdd.id);

    // if item exists, increase its quantity
    if (itemFound) {
        return cartItemsArr.map((item) => {
            if (item.id === productToAdd.id) {
                return { ...item, quantity: item.quantity + 1 };
            } else {
                return item;
            }
        });
    }

    // Just return the array with item added
    return [...cartItemsArr, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    useEffect(() => {
        setTotalQuantity(
            cartItems.reduce((prev, curr) => {
                return prev + curr.quantity;
            }, 0)
        );
    }, [cartItems]);

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        totalQuantity,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
