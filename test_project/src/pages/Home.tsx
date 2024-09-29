function MyButton() {
    return <button>I'm a button</button>;
}

export default function Home() {
    return (
        <div>
            <h1>Welcome to my Home</h1>
            <MyButton />
        </div>
    );
}
