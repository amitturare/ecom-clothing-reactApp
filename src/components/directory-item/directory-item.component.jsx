import { useNavigate } from "react-router-dom";

import {
    BackgroundImage,
    DirectoryItemContainer,
    Body,
} from "./directory-item.styles.js";

const DirectoryItem = ({ category: { imageUrl, title, routeName } }) => {
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(routeName);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
