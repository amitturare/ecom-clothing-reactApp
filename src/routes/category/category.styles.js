import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    -moz-column-gap: 20px;
    column-gap: 20px;
    row-gap: 50px;
`;

export const CategoryTitle = styled.h2`
font-size: 28px;
    margin: 30px 0 15px 0;
    text-transform: capitalize;
`
