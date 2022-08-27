import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    QuantitySpan,
    Arrow,
    Value,
    RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { handleIncrementDecrement, handleRemoveButton } =
        useContext(CartContext);

    const onRemoveButtonClick = () => handleRemoveButton(cartItem);
    const onIncrementDecrementButtonClick = (e) =>
        handleIncrementDecrement(e, cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <QuantitySpan>
                <Arrow id="decrement" onClick={onIncrementDecrementButtonClick}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow id="increment" onClick={onIncrementDecrementButtonClick}>
                    &#10095;
                </Arrow>
            </QuantitySpan>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={onRemoveButtonClick}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
