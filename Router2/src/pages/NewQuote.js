import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
    const history = useHistory();

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);

        /*
        페이지 이동
        push - back 버튼을 사용하여 원래 페이지로 돌아갈 수 있다.
        replace - back 버튼을 사용하여 원래 페이지로 돌아갈 수 없다.
        */
        history.push('/quotes');
    };

    return (
        <QuoteForm onAddQuote={addQuoteHandler} />
    );
};

export default NewQuote;