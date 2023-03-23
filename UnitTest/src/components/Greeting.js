import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>It's good to see u!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>ChangeText</button>
    </div>
  );
};

export default Greeting;
