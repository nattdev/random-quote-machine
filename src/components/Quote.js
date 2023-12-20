function Quote() {
    return (
        <div className="quote-description bg-light">
            <blockquote className="fs-1 text-center blockquote">
            <i className="bi bi-quote"></i><span className="d-inline-block" id="text">Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.</span>
            </blockquote>
            <p className="author text-end fs-6"><i className="bi bi-dash"></i><span id="author">Jamie Paolinetti</span></p>
        </div>
    );
}

export default Quote;