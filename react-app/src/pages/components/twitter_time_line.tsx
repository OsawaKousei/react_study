import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    max-height: 500px; /* 最大の高さを設定 */
    overflow-y: auto; /* 縦方向のスクロールを有効にする */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f5f8fa;
`;

const TwitterTimeline = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Container>
            <a
                className="twitter-timeline"
                href="https://twitter.com/MechatroCreator?ref_src=twsrc%5Etfw"
            >
                Tweets by MechatroCreator
            </a>
        </Container>
    );
};

export default TwitterTimeline;
