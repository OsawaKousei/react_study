import Container from "./components/container";
import SideBarContainer from "./components/side_bar_continer";
import WideContainer from "./components/wide_container";

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
                            <h2>京大機械研究会</h2>
                            <p>
                                京大機械研究会は京大公認団体であり、京大唯一の
                                ロボット製作サークルです。ロボットの製作を通して、ハード製作、電子工作、プログラミングなど
                                を中心に活動を行っています。
                            </p>
                        </Container>
                        <Container
                            padding="20px"
                            margin="10px auto"
                            backgroundColor="#f0f0f0"
                            borderRadius="8px"
                            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                            maxWidth="600px"
                        >
                            <h2>活動の方針</h2>
                            <p>
                                機械研の活動理念は、「自発的なものづくり」です。自ら作りたいものを設定し、それを実現する
                                にはどのような技術、理論が必要かを考えながら、ロボットや作品を製作しています。
                                また、自分たちが作った作品を学祭やイベントで展示することで、交流も図っています。
                            </p>
                        </Container>
                        <Container
                            padding="20px"
                            margin="10px auto"
                            backgroundColor="#f0f0f0"
                            borderRadius="8px"
                            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                            maxWidth="600px"
                        >
                            <h2>活動場所</h2>
                            <p>
                                活動場所は、主に西部のBOX棟C105にある工作室で活動しています。
                                また、週に１回、会員が都合のいい日に例会を行っています。（2024年度は火曜日昼休みに行う予定です。）
                            </p>
                        </Container>
                        <Container
                            padding="20px"
                            margin="10px auto"
                            backgroundColor="#f0f0f0"
                            borderRadius="8px"
                            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                            maxWidth="600px"
                        >
                            <h2>機械研の特徴</h2>
                            <p>
                                機械研の活動内容は基本的に自由なので、技術系に興味のある人たちがそれぞれ自発的に活動しています。
                                なので、それぞれ違う得意分野をもった人たちが集まり、日々刺激しあいながら活動しています。
                            </p>
                        </Container>
                        <Container
                            padding="20px"
                            margin="10px auto"
                            backgroundColor="#f0f0f0"
                            borderRadius="8px"
                            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                            maxWidth="600px"
                        >
                            <h2>少しでも気になった方はぜひ新歓へ</h2>
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
                            <h2 style={{ color: "#000" }}>Logo</h2>
                            <p style={{ color: "#000" }}>twitter</p>
                            <p style={{ color: "#000" }}>youtuce</p>
                            <p style={{ color: "#000" }}>github</p>
                            <p style={{ color: "#000" }}>gitlab</p>
                        </Container>
                    </>
                }
            />
        </div>
    );
}
