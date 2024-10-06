import styled from "styled-components";
import DropdownMenu from "./dropdown_menu";

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #f8f9fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
    height: 40px;
`;

const RightAlignedMenu = styled.div`
    margin-left: auto; /* 右詰にするために追加 */
`;

export default function Header() {
    return (
        <HeaderContainer>
            <Logo src="/kikaiken_logo.png" alt="Kikaiken Logo" />
            <RightAlignedMenu>
                <DropdownMenu />
            </RightAlignedMenu>
        </HeaderContainer>
    );
}