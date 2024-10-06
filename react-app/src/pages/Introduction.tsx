import {
    FaBlogger,
    FaGithub,
    FaGitlab,
    FaSquareXTwitter,
    FaYoutube,
} from "react-icons/fa6";
import styled from "styled-components";
import Container from "./components/container";
import LinkedButton from "./components/linked_button";
import LinkedIcon from "./components/linked_icon";
import SideBarContainer from "./components/sidebar_continer";
import WideContainer from "./components/wide_container";

const Title = styled.h2`
    background-color: #007bff;
    color: white;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Paragraph = styled.p`
    line-height: 1.6;
    color: #333;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Introduction() {
    return (
        <div>
            <WideContainer
                padding="40px"
                margin="0px"
                backgroundColor="#f0f0f0"
                borderRadius="0"
                boxShadow="0 rgba(0, 0, 0, 0.2)"
                style={{
                    backgroundImage: `url('/img01.png')`, // Specify the background image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div style={{ textAlign: "center", color: "#fff" }}>
                    <h1>サークル紹介</h1>
                    <p>Our Introduction</p>
                </div>
            </WideContainer>
            <SideBarContainer
                mainContent={
                    <>
                        <Container
                            padding="20px"
                            margin="10px auto"
                            backgroundColor="#f0f0f0"
                            borderRadius="8px"
                            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                            maxWidth="600px"
                        >
                            <Title>京大機械研究会</Title>
                            <Paragraph>
                                京大機械研究会は京大公認団体であり、京大唯一のロボット製作サークルです。ロボットの製作を通して、ハード製作、電子工作、プログラミングなどを中心に活動を行っています。
                            </Paragraph>
                        </Container>
                        <Container
                            padding="20px"
                            margin="10px auto"
                            backgroundColor="#f0f0f0"
                            borderRadius="8px"
                            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                            maxWidth="600px"
                        >
                            <Title>活動の方針</Title>
                            <Paragraph>
                                機械研の活動理念は、「自発的なものづくり」です。自ら作りたいものを設定し、それを実現する
                                にはどのような技術、理論が必要かを考えながら、ロボットや作品を製作しています。
                                また、自分たちが作った作品を学祭やイベントで展示することで、交流も図っています。
                            </Paragraph>
                        </Container>
                        <Container
                            padding="20px"
                            margin="10px auto"
                            backgroundColor="#f0f0f0"
                            borderRadius="8px"
                            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                            maxWidth="600px"
                        >
                            <Title>活動場所</Title>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1455.3655141180993!2d135.77723603901626!3d35.02709925346109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600109555777a239%3A0x8d9acde0ab5c4ff2!2z5Lqs5aSn5qmf5qKw56CU56m25Lya!5e0!3m2!1sja!2sjp!4v1581224250221!5m2!1sja!2sjp"
                                width="100%"
                                height="450"
                            ></iframe>
                            <Paragraph>
                                活動場所は、主に西部のBOX棟C105にある工作室で活動しています。
                                また、週に１回、会員が都合のいい日に例会を行っています。（2024年度は火曜日昼休みに行う予定です。）
                            </Paragraph>
                        </Container>
                        <Container
                            padding="20px"
                            margin="10px auto"
                            backgroundColor="#f0f0f0"
                            borderRadius="8px"
                            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                            maxWidth="600px"
                        >
                            <Title>機械研の特徴</Title>
                            <Paragraph>
                                機械研の活動内容は基本的に自由なので、技術系に興味のある人たちがそれぞれ自発的に活動しています。
                                なので、それぞれ違う得意分野をもった人たちが集まり、日々刺激しあいながら活動しています。
                            </Paragraph>
                        </Container>
                        <Container
                            padding="20px"
                            margin="10px auto"
                            backgroundColor="#f0f0f0"
                            borderRadius="8px"
                            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                            maxWidth="600px"
                        >
                            <Title>少しでも気になった方はぜひ新歓へ</Title>
                            <ButtonContainer>
                                <LinkedButton to="/">
                                    このボタンを押してね
                                </LinkedButton>
                            </ButtonContainer>
                        </Container>
                    </>
                }
                sidebarContent={
                    <>
                        <Container
                            padding="20px"
                            margin="10px auto"
                            backgroundColor="#f0f0f0"
                            borderRadius="8px"
                            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                            maxWidth="200px"
                        >
                            <img
                                src="/kikaiken_logo2.png"
                                alt="Logo"
                                style={{ width: "100%", height: "auto" }}
                            />
                            <p>
                                <LinkedIcon
                                    icon={FaGithub}
                                    link="https://github.com/kikaiken"
                                    color="#333"
                                />
                                <span
                                    style={{ marginLeft: "8px", color: "#000" }}
                                >
                                    GitHub
                                </span>
                            </p>
                            <p>
                                <LinkedIcon
                                    icon={FaGitlab}
                                    link="https://gitlab.com/kikaiken"
                                    color="#EA6100"
                                />
                                <span
                                    style={{ marginLeft: "8px", color: "#000" }}
                                >
                                    Gitlab
                                </span>
                            </p>
                            <p>
                                <LinkedIcon
                                    icon={FaSquareXTwitter}
                                    link="https://x.com/mechatrocreator"
                                    color="#333"
                                />
                                <span
                                    style={{ marginLeft: "8px", color: "#000" }}
                                >
                                    X
                                </span>
                            </p>
                            <p>
                                <LinkedIcon
                                    icon={FaBlogger}
                                    link="https://kikaiken.blogspot.com/"
                                    color="#EA6100"
                                />
                                <span
                                    style={{ marginLeft: "8px", color: "#000" }}
                                >
                                    Bologger
                                </span>
                            </p>
                            <p>
                                <LinkedIcon
                                    icon={FaYoutube}
                                    link="https://www.youtube.com/user/kikaiken"
                                    color="#B50000"
                                />
                                <span
                                    style={{ marginLeft: "8px", color: "#000" }}
                                >
                                    Youtube
                                </span>
                            </p>
                        </Container>
                    </>
                }
            />
        </div>
    );
}
