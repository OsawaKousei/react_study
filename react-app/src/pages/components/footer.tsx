import styled from "styled-components";
import Container from "./container";
import WideContainer from "./wide_container";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #282c34;
    color: white;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 1200px;
    margin-top: 20px;
`;

const CopyRight = styled.div`
    text-align: center;
    margin-top: 10px;
`;

const Nav = styled.nav`
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 10px;
`;

const NavLink = styled.a`
    color: #000;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
        text-decoration: underline;
    }
`;

export default function Footer() {
    return (
        <FooterContainer>
            <WideContainer
                padding="20px"
                margin="0 auto"
                backgroundColor="#f0f0f0"
                borderRadius="0"
                boxShadow="0 rgba(0, 0, 0, 0.2)"
            >
                <CopyRight>© 2023 Your Company</CopyRight>
                <Nav>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </Nav>
            </WideContainer>
            <FlexContainer>
                <Container
                    padding="20px"
                    margin="10px"
                    backgroundColor="#e0e0e0"
                    borderRadius="8px"
                    boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                >
                    <h2>contents</h2>
                    <p>HOME</p>
                    <p>新勧情報</p>
                    <p>活動紹介</p>
                </Container>
                <Container
                    padding="20px"
                    margin="10px"
                    backgroundColor="#e0e0e0"
                    borderRadius="8px"
                    boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                >
                    <h2>Links</h2>
                    <p>機械研旧HP</p>
                    <p>京都大学</p>
                    <p>松野研究室</p>
                </Container>
                <Container
                    padding="20px"
                    margin="10px"
                    backgroundColor="#e0e0e0"
                    borderRadius="8px"
                    boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                >
                    <h2>Contact us</h2>
                    <p>Gmail</p>
                    <p>Twitter</p>
                </Container>
            </FlexContainer>
        </FooterContainer>
    );
}
