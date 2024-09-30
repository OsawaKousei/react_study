import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const DropdownButton = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #3e8e41;
    }
`;

const DropdownContent = styled.div<{ show: boolean }>`
    display: ${({ show }) => (show ? "block" : "none")};
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

    a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;

        &:hover {
            background-color: #f1f1f1;
        }
    }
`;

const DropdownMenu: React.FC = () => {
    const [show, setShow] = useState(false);

    const toggleDropdown = () => {
        setShow(!show);
    };

    return (
        <DropdownContainer>
            <DropdownButton onClick={toggleDropdown}>Menu</DropdownButton>
            <DropdownContent show={show}>
                <Link to="/">Home</Link>
                <Link to="/introduction">Introduction</Link>
            </DropdownContent>
        </DropdownContainer>
    );
};

export default DropdownMenu;
