import { Component } from "react";
import styled from "styled-components";
import Container from "./components/container";

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
                <Container
                    padding="40px"
                    margin="20px auto"
                    backgroundColor="#f0f0f0"
                    borderRadius="16px"
                    boxShadow="0 6px 12px rgba(0, 0, 0, 0.2)"
                    maxWidth="800px"
                >
                    <h1>Home</h1>
                    <p>Welcome to the Home page!</p>
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
            </div>
        );
    }
}

export default Home;
