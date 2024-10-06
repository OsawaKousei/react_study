import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

interface ScrollBoxProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  title?: React.ReactNode;
  icon?: IconType; // アイコンの型を追加
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
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const TitleIcon = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

const ScrollBox: React.FC<ScrollBoxProps> = ({
  width,
  height,
  backgroundColor,
  borderRadius,
  boxShadow,
  title,
  icon: Icon, // アイコンを受け取る
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
      {title && (
        <TitleContainer>
          {Icon && (
            <TitleIcon>
              <Icon />
            </TitleIcon>
          )}
          {title}
        </TitleContainer>
      )}
      {children}
    </StyledScrollBox>
  );
};

export default ScrollBox;
