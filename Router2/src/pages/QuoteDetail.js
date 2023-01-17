import { Fragment, useEffect } from "react";
import { Routes, Route, Link, useParams, } from "react-router-dom";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
    const params = useParams();
    const { quoteId } = params;

    const { sendRequest, status, data: loadedQuote, error } = useHttp(
        getSingleQuote,
        true
    );

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <p className="centered focused">{error}</p>;
    }

    if (!loadedQuote.text) {
        return <p>No Quote Found !!!</p>
    }

    return (
        <Fragment>
            <h1>QuoteDetail</h1>
            <HighlightedQuote
                id={loadedQuote.quoteId}
                author={loadedQuote.author}
                text={loadedQuote.text}
            />
            <div className="centered">
                <Link
                    className="btn--flat"
                    to={`comments`}
                >
                    Load comments
                </Link>
            </div>
            <Routes>
                <Route
                    path={`comments`}
                    element={<Comments />}
                />
            </Routes>
        </Fragment >
    );
};

export default QuoteDetail;