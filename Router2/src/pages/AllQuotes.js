import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Banilla', text: 'Learning React is fun !!!' },
    { id: 'q2', author: 'Ajax', text: 'Learning JS is fun !!!' },
    { id: 'q3', author: 'Console', text: 'Learning Front-end is fun !!!' },
    { id: 'q4', author: 'Data', text: 'Learning Front-end is fun !!!' },
    { id: 'q5', author: 'End', text: 'Learning Front-end is fun !!!' }
];

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    );
};

export default AllQuotes;