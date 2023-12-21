function Button({onClick}) {
    return (
        <button id="new-quote" className="new-quote btn btn-primary" onClick={onClick}>New Quote</button>
    );
}

export default Button;