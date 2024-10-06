import {
    FaBlogger,
    FaGithub,
    FaGitlab,
    FaSquareXTwitter,
    FaYoutube,
} from "react-icons/fa6";
import styled from "styled-components";
import Container from "./container";
import LinkedIcon from "./linked_icon";
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
        <CopyRight style={{ color: "#000" }}>
          Copyright © 2024- Kyoto University Mechatronics Creators, Kyoto
          University
        </CopyRight>
        <Nav>
          <LinkedIcon
            icon={FaGithub}
            link="https://github.com/kikaiken"
            color="#333"
          />
          <LinkedIcon
            icon={FaGitlab}
            link="https://gitlab.com/kikaiken"
            color="#EA6100"
          />
          <LinkedIcon
            icon={FaSquareXTwitter}
            link="https://x.com/mechatrocreator"
            color="#333"
          />
          <LinkedIcon
            icon={FaBlogger}
            link="https://kikaiken.blogspot.com/"
            color="#EA6100"
          />
          <LinkedIcon
            icon={FaYoutube}
            link="https://www.youtube.com/user/kikaiken"
            color="#B50000"
          />
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
          <div style={{ color: "#000" }}>
            <h2>contents</h2>
            <p>HOME</p>
            <p>新勧情報</p>
            <p>活動紹介</p>
          </div>
        </Container>
        <Container
          padding="20px"
          margin="10px"
          backgroundColor="#e0e0e0"
          borderRadius="8px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <div style={{ color: "#000" }}>
            <h2>Links</h2>
            <p>
              <a href="https://www.kikaiken.org/index2.html">機械研旧HP</a>
            </p>
            <p>
              <a href="https://www.kyoto-u.ac.jp/ja">京都大学</a>
            </p>
            <p>
              <a href="http://www.mechatronics.me.kyoto-u.ac.jp/">松野研究室</a>
            </p>
          </div>
        </Container>
        <Container
          padding="20px"
          margin="10px"
          backgroundColor="#e0e0e0"
          borderRadius="8px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <div style={{ color: "#000" }}>
            <h2>Contact us</h2>
            <p>Gmail</p>
            <p>kikaiken@gmail.com</p>
            <p>Twitter</p>
            <p>@MechatroCreator</p>
          </div>
        </Container>
      </FlexContainer>
    </FooterContainer>
  );
}
