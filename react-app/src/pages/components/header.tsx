// header.tsx
import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #282c34;
    color: white;
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

const Nav = styled.nav`
    display: flex;
    gap: 1rem;
`;

const NavLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
        text-decoration: underline;
    }
`;

export default function Header() {
    return (
        <HeaderContainer>
            <Logo>MyLogo</Logo>
            <Nav>
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </Nav>
        </HeaderContainer>
    );
}
