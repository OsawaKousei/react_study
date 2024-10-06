import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  }
`;

const StyledButton = styled(Link)`
    display: inline-block;
    padding: 12px 24px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 8px;
    text-decoration: none;
    text-align: center;
    transition: transform 0.3s, background-color 0.3s;
    animation: ${pulse} 2s infinite;

    &:hover {
        transform: scale(1.2);
        background-color: #0056b3;
    }
`;

const LinkedButton: React.FC<{ to: string; children?: React.ReactNode }> = ({
    to,
    children,
}) => {
    return <StyledButton to={to}>{children}</StyledButton>;
};

export default LinkedButton;
