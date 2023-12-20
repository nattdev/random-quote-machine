import Quote from './Quote';
import SocialMediaButtons from './SocialMediaButtons';
import Button from './Button';

function QuoteMachine() {
    return (
        <div id="quote-box" className="container mx-auto my-auto p-3 bg-white">
            <div className='row'>
                <Quote />
            </div>
            <div className='row p-2 align-items-center'>
                <div className='col'>
                    <SocialMediaButtons />
                </div>
                <div className='col text-end'>
                    <Button />
                </div>
            </div>
        </div>
    );
}

export default QuoteMachine;