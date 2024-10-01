import { Component } from "react";
import styled from "styled-components";
import Container from "./components/container";
import ScrollBox from "./components/scroll_box";
import TextBoard from "./components/text_board";
import TwitterTimeline from "./components/tiwitter_time_line";
import WideContainer from "./components/wide_container";
import ScrollBoxContent from "./contents/news";

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap; /* 折り返しを有効にする */
    justify-content: space-between;
    gap: 20px; /* コンテナ間のスペース */
`;
class Home extends Component {
    render() {
        return (
            <div>
                <WideContainer
                    padding="40px"
                    margin="0px"
                    backgroundColor="#f0f0f0"
                    borderRadius="0"
                    boxShadow="0 rgba(0, 0, 0, 0.2)"
                >
                    <div style={{ textAlign: "center" }}>
                        <h1>京大機械研究会</h1>
                        <p>Kyoto University Mechatronics Creators</p>
                    </div>
                </WideContainer>
                <WideContainer
                    padding="20px"
                    margin="0px"
                    backgroundColor="#f0f0f0"
                    borderRadius="0"
                    boxShadow="0 rgba(0, 0, 0, 0.2)"
                >
                    <TextBoard
                        text={[
                            "京大機械研究会は京大で唯一のロボットサークルです。",
                            "活動内容は、ロボット作成や電子工作、プログラミングなど様々です。",
                            "ボコンに出場したり、学祭に向けて自由に製作物 を作ったりと自由に活動を行うことができます。",
                        ]}
                        backgroundColor="#fff"
                        marginColor="#f0f0f0"
                        lineHeight="2"
                    />
                </WideContainer>
                <Container
                    padding="20px"
                    margin="10px auto"
                    backgroundColor="#e0e0e0"
                    borderRadius="8px"
                    boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                    maxWidth="400px"
                >
                    <ScrollBox
                        width="100%"
                        height="300px"
                        backgroundColor="#fff"
                        borderRadius="8px"
                        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                        title="Scroll Box"
                    >
                        <ScrollBoxContent />
                    </ScrollBox>
                </Container>
                <FlexContainer>
                    <Container
                        padding="20px"
                        margin="10px auto"
                        backgroundColor="#e0e0e0"
                        borderRadius="8px"
                        boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                        maxWidth="400px"
                    >
                        <h2>Another Section1</h2>
                        <p>This container has different styles.</p>
                    </Container>
                    <Container
                        padding="20px"
                        margin="10px auto"
                        backgroundColor="#e0e0e0"
                        borderRadius="8px"
                        boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                        maxWidth="400px"
                    >
                        <h2>Another Section2</h2>
                        <p>This container has different styles.</p>
                    </Container>
                    <Container
                        padding="20px"
                        margin="10px auto"
                        backgroundColor="#e0e0e0"
                        borderRadius="8px"
                        boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                        maxWidth="400px"
                    >
                        <h2>Another Section2</h2>
                        <p>This container has different styles.</p>
                    </Container>
                    <Container
                        padding="20px"
                        margin="10px auto"
                        backgroundColor="#e0e0e0"
                        borderRadius="8px"
                        boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                        maxWidth="400px"
                    >
                        <h2>Another Section2</h2>
                        <p>This container has different styles.</p>
                    </Container>
                </FlexContainer>
                <Container
                    padding="20px"
                    margin="10px auto"
                    backgroundColor="#e0e0e0"
                    borderRadius="8px"
                    boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                    maxWidth="600px"
                >
                    <TwitterTimeline />
                </Container>
            </div>
        );
    }
}

export default Home;
