import Quote from './Quote';
import SocialMediaButtons from './SocialMediaButtons';
import Button from './Button';

function QuoteMachine() {
    return (
        <div className="quote-box">
            <Quote />
            <SocialMediaButtons />
            <Button />
        </div>
    );
}

export default QuoteMachine;