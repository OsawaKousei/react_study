import { motion } from "framer-motion";
import React from "react";
import { FaHome, FaTrophy } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { RiMegaphoneFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 5rem;
`;

const DropdownButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const DropdownContent = styled(motion.div)`
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 200px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  z-index: 1;

  ${DropdownContainer}:hover & {
    display: block;
  }
`;

const DropdownItem = styled(Link)`
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }

  svg {
    margin-right: 8px;
  }
`;

const DropdownMenu: React.FC = () => {
  return (
    <DropdownContainer>
      <DropdownButton>Menu</DropdownButton>
      <DropdownContent
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <DropdownItem to="/">
          <FaHome />
          ホーム
        </DropdownItem>
        <DropdownItem to="/">
          <RiMegaphoneFill />
          新歓情報
        </DropdownItem>
        <DropdownItem to="/introduction">
          <IoIosDocument />
          サークル紹介
        </DropdownItem>
        <DropdownItem to="/">
          <FaTrophy />
          活動成績
        </DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default DropdownMenu;
