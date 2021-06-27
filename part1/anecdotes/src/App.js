import React, { useState } from "react";

const Header = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text} </button>
);

const App = () => {

  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(7).fill(0));

  const clickVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    console.log(points)
    return (setPoints(copy))
  }

  const nextAnecdote = () => {
    return (
      setSelected(Math.floor(Math.random() * 7))
    )
  }

  return (
    <div>
      <Header title="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} points</p>
      <Button handleClick={clickVote} text="vote" />
      <Button handleClick={nextAnecdote} text="next anecdote"/>
      <Header title="Anecdote with most votes" />
      <p>{anecdotes[points.indexOf(Math.max.apply(null, points))]}</p>
    </div>
    )
};

export default App;
