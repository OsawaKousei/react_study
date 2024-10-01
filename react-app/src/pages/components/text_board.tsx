import React from "react";
import styled from "styled-components";

interface TextBoardProps {
    text: string[]; // 複数行のテキストを受け取るために文字列の配列に変更
    backgroundColor?: string; // 背景色のプロパティを追加
    marginColor?: string; // 余白部分の背景色のプロパティを追加
    lineHeight?: string; // 行間のプロパティを追加
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto; /* テキストの高さに合わせる */
    padding: 20px 0; /* 上下のパディング */
`;

const TextWrapper = styled.div<{ marginColor?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 2px solid #000; /* 左側の枠線 */
    border-right: 2px solid #000; /* 右側の枠線 */
    padding: 0 20px; /* 左右のパディング */
    background-color: ${(props) =>
        props.marginColor || "transparent"}; /* 余白部分の背景色 */
`;

const MarginWrapper = styled.div<{
    backgroundColor?: string;
    lineHeight?: string;
}>`
    display: flex;
    flex-direction: column; /* 複数行のテキストを縦に並べる */
    justify-content: center;
    align-items: center;
    font-size: 1.5rem; /* テキストのサイズ */
    background-color: ${(props) =>
        props.backgroundColor || "transparent"}; /* 背景色を適用 */
    padding: 0 20px; /* 左右のパディング */
    line-height: ${(props) => props.lineHeight || "normal"}; /* 行間を適用 */
`;

const TextBoard: React.FC<TextBoardProps> = ({
    text,
    backgroundColor,
    marginColor,
    lineHeight,
}) => {
    return (
        <Container>
            <TextWrapper marginColor={marginColor}>
                <MarginWrapper
                    backgroundColor={backgroundColor}
                    lineHeight={lineHeight}
                >
                    {text.map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                </MarginWrapper>
            </TextWrapper>
        </Container>
    );
};

export default TextBoard;
