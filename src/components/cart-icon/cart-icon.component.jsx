import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
    const { setIsCartOpen, totalQuantity } = useContext(CartContext);

    const toggleClick = () => {
        setIsCartOpen((prevState) => !prevState);
    };
    return (
        <div className="cart-icon-container" onClick={toggleClick}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{totalQuantity}</span>
        </div>
    );
};

export default CartIcon;
