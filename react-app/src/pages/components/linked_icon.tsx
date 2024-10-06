import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

interface LinkedIconProps {
  icon: IconType;
  link: string;
  color?: string;
}

const IconContainer = styled(motion.a)<{ color?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color || "#000"};
  font-size: 24px;
  text-decoration: none;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    transform: scale(1.2);
    color: ${({ color }) => color || "#007bff"};
  }
`;

const LinkedIcon: React.FC<LinkedIconProps> = ({ icon: Icon, link, color }) => {
  return (
    <IconContainer
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      color={color}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
    >
      <Icon />
    </IconContainer>
  );
};

export default LinkedIcon;
