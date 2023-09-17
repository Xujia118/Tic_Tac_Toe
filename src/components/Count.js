function MyButton({ count, onClick}) {

    return (
        <button onClick={onClick}>
            You clicked me {count} times
        </button>
    );
}

export default MyButton;