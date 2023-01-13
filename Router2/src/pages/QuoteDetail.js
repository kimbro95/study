import { Fragment } from "react";
import { Redirect, Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun !!!' },
    { id: 'q2', author: 'Min', text: 'Learning JS is fun !!!' },
    { id: 'q3', author: 'Top', text: 'Learning Front-end is fun !!!' }
];

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

    if (!quote) {
        return <p>No Quote Found !!!</p>
    }

    return (
        <Fragment>
            <h1>QuoteDetail</h1>
            <p>{params.quoteId}</p>

            <HighlightedQuote
                id={quote.quoteId}
                author={quote.author}
                text={quote.text}
            />
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;