import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem /> {/* JSX코드내에서 사용자 지정 컴포넌트 사용할때는 대문자로 시작*/}
    </div>
  );
}

export default App;
