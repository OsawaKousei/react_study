import React from "react";
import styled from "styled-components";

interface ScrollBoxProps {
    width?: string;
    height?: string;
    backgroundColor?: string;
    borderRadius?: string;
    boxShadow?: string;
    title?: string; // タイトルプロパティを追加
    children: React.ReactNode;
}

const StyledScrollBox = styled.div<ScrollBoxProps>`
    width: ${(props) => props.width || "300px"};
    height: ${(props) => props.height || "400px"};
    background-color: ${(props) => props.backgroundColor || "#fff"};
    border-radius: ${(props) => props.borderRadius || "8px"};
    box-shadow: ${(props) => props.boxShadow || "0 4px 8px rgba(0, 0, 0, 0.1)"};
    overflow-y: auto;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    /* スクロールバーのスタイル */
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
    }
`;

const Title = styled.h2`
    margin: 0 0 16px 0;
    padding: 0;
    font-size: 1.5rem;
    color: #333;
`;

const ScrollBox: React.FC<ScrollBoxProps> = ({
    width,
    height,
    backgroundColor,
    borderRadius,
    boxShadow,
    title,
    children,
}) => {
    return (
        <StyledScrollBox
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            boxShadow={boxShadow}
        >
            {title && <Title>{title}</Title>}
            {children}
        </StyledScrollBox>
    );
};

export default ScrollBox;
