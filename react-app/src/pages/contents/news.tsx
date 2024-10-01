import styled from "styled-components";

const NewsItem = styled.div`
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const News = () => {
    return (
        <div>
            <NewsItem>
                <p>
                    2024/04/09{" "}
                    <a href="https://example.com">新歓情報を更新しました。</a>
                </p>
            </NewsItem>
            <NewsItem>
                <p>
                    2024/04/09{" "}
                    <a href="https://example.com">新歓情報を更新しました。</a>
                </p>
            </NewsItem>
            <NewsItem>
                <p>
                    2024/04/09{" "}
                    <a href="https://example.com">新歓情報を更新しました。</a>
                </p>
            </NewsItem>
            <NewsItem>
                <p>
                    2024/04/09{" "}
                    <a href="https://example.com">
                        オンライン仮入会・体験のお知らせ
                    </a>{" "}
                    for more information.
                </p>
            </NewsItem>
        </div>
    );
};

export default News;
