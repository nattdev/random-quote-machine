function SocialMediaButtons({text, name}) {
    return (
        <div className="social-media-buttons">
            <a id="tweet-quote" className="btn btn-primary" href={`http://twitter.com/intent/tweet?text=${text} ${name}`}><i className="bi bi-twitter-x"></i></a>
        </div>
    );
}

export default SocialMediaButtons;