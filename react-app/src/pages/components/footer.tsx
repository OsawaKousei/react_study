// footer.tsx
import styled from "styled-components";

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #282c34;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const CopyRight = styled.div`
    font-size: 0.9rem;
`;

const Nav = styled.nav`
    display: flex;
    gap: 1rem;
`;

const NavLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
        text-decoration: underline;
    }
`;

export default function Footer() {
    return (
        <FooterContainer>
            <CopyRight>&copy; 2023 MyCompany</CopyRight>
            <Nav>
                <NavLink href="#privacy">Privacy Policy</NavLink>
                <NavLink href="#terms">Terms of Service</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </Nav>
        </FooterContainer>
    );
}
