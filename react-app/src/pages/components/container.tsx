import React from "react";
import styled from "styled-components";

interface ContainerProps {
    padding?: string;
    margin?: string;
    backgroundColor?: string;
    borderRadius?: string;
    boxShadow?: string;
    maxWidth?: string;
    children: React.ReactNode;
}

const StyledContainer = styled.div<ContainerProps>`
    padding: ${(props) => props.padding || "20px"};
    margin: ${(props) => props.margin || "0 auto"};
    background-color: ${(props) => props.backgroundColor || "#fff"};
    border-radius: ${(props) => props.borderRadius || "8px"};
    box-shadow: ${(props) => props.boxShadow || "0 4px 8px rgba(0, 0, 0, 0.1)"};
    max-width: ${(props) => props.maxWidth || "1200px"};
    width: 100%;
`;

const Container: React.FC<ContainerProps> = ({
    padding,
    margin,
    backgroundColor,
    borderRadius,
    boxShadow,
    maxWidth,
    children,
}) => {
    return (
        <StyledContainer
            padding={padding}
            margin={margin}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            boxShadow={boxShadow}
            maxWidth={maxWidth}
        >
            {children}
        </StyledContainer>
    );
};

export default Container;
