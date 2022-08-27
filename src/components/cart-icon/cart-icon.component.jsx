import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
    CartIconContainer,
    ItemCount,
    ShoppingIcon,
} from "./cart-icon.styles"; 

const CartIcon = () => {
    const { setIsCartOpen, totalQuantity } = useContext(CartContext);

    const toggleClick = () => {
        setIsCartOpen((prevState) => !prevState);
    };
    return (
        <CartIconContainer onClick={toggleClick}>
            <ShoppingIcon/>
            <ItemCount>{totalQuantity}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
