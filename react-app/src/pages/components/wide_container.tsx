import React from "react";
import styled from "styled-components";

interface WideContainerProps {
    padding?: string;
    margin?: string;
    backgroundColor?: string;
    borderRadius?: string;
    boxShadow?: string;
    maxWidth?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const StyledWideContainer = styled.div<WideContainerProps>`
    padding: ${(props) => props.padding || "20px"};
    margin: ${(props) => props.margin || "0 auto"};
    background-color: ${(props) => props.backgroundColor || "#fff"};
    border-radius: ${(props) => props.borderRadius || "8px"};
    box-shadow: ${(props) => props.boxShadow || "0 4px 8px rgba(0, 0, 0, 0.1)"};
    width: 100%; /* 横幅を画面いっぱいに広げる */
    max-width: ${(props) => props.maxWidth || "none"}; /* max-width を調整 */
    box-sizing: border-box; /* Ensure padding is included in the element's total width */
    ${(props) => ({ ...props.style })}; /* Add this line */
`;

const WideContainer: React.FC<WideContainerProps> = ({
    padding,
    margin,
    backgroundColor,
    borderRadius,
    boxShadow,
    maxWidth,
    children,
    style,
}) => {
    return (
        <StyledWideContainer
            padding={padding}
            margin={margin}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            boxShadow={boxShadow}
            maxWidth={maxWidth}
            style={style}
        >
            {children}
        </StyledWideContainer>
    );
};

export default WideContainer;
