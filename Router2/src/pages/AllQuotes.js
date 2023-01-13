import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun !!!' },
    { id: 'q2', author: 'Min', text: 'Learning JS is fun !!!' },
    { id: 'q3', author: 'Top', text: 'Learning Front-end is fun !!!' }
];

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    );
};

export default AllQuotes;