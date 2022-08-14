import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { handleIncrementDecrement, handleRemoveButton } =
        useContext(CartContext);
    useContext(CartContext);

    const onRemoveButtonClick = () => handleRemoveButton(cartItem);
    const onIncrementDecrementButtonClick = (e) =>
        handleIncrementDecrement(e, cartItem);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div
                    className="arrow"
                    id="decrement"
                    onClick={onIncrementDecrementButtonClick}
                >
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div
                    className="arrow"
                    id="increment"
                    onClick={onIncrementDecrementButtonClick}
                >
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={onRemoveButtonClick}>
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;
