import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import { CategoryPreviewContainer, Preview } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Link className="title" to={title}>
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                </Link>
            </h2>
            <Preview>
                {products.slice(0, 4).map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;
