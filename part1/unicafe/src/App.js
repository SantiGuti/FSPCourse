import React, { useState } from "react";

const Header = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text} </button>
);

const Buttons = (props) => {
  return (
    <div>
      <Button handleClick={props.handleGoodClick} text={props.textgood} />
      <Button handleClick={props.handleNeutralClick} text={props.textneutral} />
      <Button handleClick={props.handleBadClick} text={props.textbad} />
    </div>
  );
};

const Statistic = ({ text, value }) => (
  <tbody>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  </tbody>
);

const Statistics = (props) => {
  if (props.allSum === 0) {
    return <p>no feedback given</p>;
  }
  return (
    <table>
      <Statistic text={props.good} value={props.goodvalue} />
      <Statistic text={props.neutral} value={props.neutralvalue} />
      <Statistic text={props.bad} value={props.badvalue} />
      <Statistic text={props.all} value={props.allvalue} />
      <Statistic text={props.average} value={props.averagevalue} />
      <Statistic text={props.positive} value={props.positivevalue} />
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const allSum = good + neutral + bad;

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header title="give feedback" />
      <Buttons
        handleGoodClick={handleGoodClick}
        textgood="good"
        handleNeutralClick={handleNeutralClick}
        textneutral="neutral"
        handleBadClick={handleBadClick}
        textbad="bad"
      />
      <Header title="statistics" />
      <Statistics
        allSum={allSum}
        good="good"
        goodvalue={good}
        neutral="neutral"
        neutralvalue={neutral}
        bad="bad"
        badvalue={bad}
        all="all"
        allvalue={allSum}
        average="average"
        averagevalue={(good - bad) / allSum}
        positive="positive"
        positivevalue={(good / allSum) * 100 + " %"}
      />
    </div>
  );
};

export default App;
