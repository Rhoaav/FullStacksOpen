import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let total = good + bad + neutral;

  const handleClickGood = () => {
    console.log("reviewed good");
    setGood(good + 1);
  };

  const handleClickNeutral = () => {
    console.log("reviewed neutral");
    setNeutral(neutral + 1);
  };

  const handleClickBad = () => {
    console.log("reviewed bad");
    setBad(bad + 1);
  };

  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        <h1> GIVE FEEDBACK!!! </h1>

        <Button onClick={handleClickGood} text="Good" />
        <Button onClick={handleClickNeutral} text="Neutral" />
        <Button onClick={handleClickBad} text="Bad" />

        <h2> STATISTICS </h2>

        <p>No feedback Given </p>
      </div>
    );
  }

  return (
    <div>
      <h1> GIVE FEEDBACK!!! </h1>

      <Button onClick={handleClickGood} text="Good" />
      <Button onClick={handleClickNeutral} text="Neutral" />
      <Button onClick={handleClickBad} text="Bad" />

      <h2> STATISTICS </h2>

      <table>
        <Statistics text="Good " value={good} />
        <Statistics text="Neutral " value={neutral} />
        <Statistics text="Bad " value={bad} />
        <Statistics text="All " value={total} />
        <Statistics text="Average " value={(good - bad) / total} />
        <Statistics text="% Positive " value={(good * 100) / total} />
      </table>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
