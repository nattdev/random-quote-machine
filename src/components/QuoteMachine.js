import Quote from './Quote';
import SocialMediaButtons from './SocialMediaButtons';
import Button from './Button';
import { useEffect, useState } from 'react';
import getRandomQuote from '../utils/getRandomQuote'


function QuoteMachine() {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const fetchRandomQuote = () => {
        const apiUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error de red - Código de estado: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                let mainQuote = getRandomQuote(data);
                console.log(mainQuote);
                setQuote(mainQuote.quote);
                setAuthor(mainQuote.author)

            })
            .catch(error => console.error("Error:", error));
    };
    

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    const handleNewQuote = () => {
        console.log("clic");
        fetchRandomQuote();
    };

    return (
        <div id="quote-box" className="container mx-auto my-auto p-3 bg-white">
            <div className='row'>
                <Quote text={quote} name={author} />
            </div>
            <div className='row p-2 align-items-center'>
                <div className='col'>
                    <SocialMediaButtons text={quote} name={author}/>
                </div>
                <div className='col text-end'>
                    <Button onClick={handleNewQuote}/>
                </div>
            </div>
        </div>
    );
}

export default QuoteMachine;