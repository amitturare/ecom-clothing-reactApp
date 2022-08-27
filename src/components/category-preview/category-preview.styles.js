import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    h2 {
        font-size: 28px;
        margin-bottom: 1.25rem;
        cursor: pointer;
    }
`;

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    -moz-column-gap: 20px;
    column-gap: 20px;
    margin-bottom: 1.5rem;
`;
