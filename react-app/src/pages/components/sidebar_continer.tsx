import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    background-color: #f0f0f0;
`;

const MainContent = styled.div`
    flex: 1;
    padding: 20px;
    background-color: #fff;
`;

const Sidebar = styled.div`
    width: 300px;
    background-color: #2c3e50;
    color: #ecf0f1;
    padding: 20px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
`;

const Divider = styled.div`
    width: 1px;
    background-color: #bdc3c7;
`;

interface SideBarContainerProps {
    mainContent: ReactNode;
    sidebarContent: ReactNode;
}

const SideBarContainer: React.FC<SideBarContainerProps> = ({
    mainContent,
    sidebarContent,
}) => {
    return (
        <Container>
            <MainContent>{mainContent}</MainContent>
            <Divider />
            <Sidebar>{sidebarContent}</Sidebar>
        </Container>
    );
};

export default SideBarContainer;
