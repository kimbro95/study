import './Card.css'

const Card = (props) => {
    const classes = `card ${props.className}`
    return (
        <div className={classes}>
            {props.children}{/* Card 컴포넌트 사이(태그가 열리고 닫히는 사이)에 들어가는 ExpenseItem 나 ExpenseDate, html태그를 prps.children 키워드를 사용하여 불러 올 수 있다.*/}
        </div >
    );
}

export default Card;