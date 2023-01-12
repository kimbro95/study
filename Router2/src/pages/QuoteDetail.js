import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
    const params = useParams();

    return (
        <Fragment>
            <h1>QuoteDetail</h1>
            <p>{params.quoteId}</p>

            {/* 2가지 중첩 경로 사용법 */}
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
            <Route path={`/quotes/:quoteId/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;