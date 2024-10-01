import styled from "styled-components";
import DropdownMenu from "./dropdown_menu";

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

const RightAlignedMenu = styled.div`
    margin-left: auto; /* 右詰にするために追加 */
`;

export default function Header() {
    return (
        <HeaderContainer>
            <Logo>MyLogo</Logo>
            <RightAlignedMenu>
                <DropdownMenu />
            </RightAlignedMenu>
        </HeaderContainer>
    );
}
