import React from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import "./App.css";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleGoodFeedback = () => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      good: prevFeedback.good + 1,
    }));
  };
  return (
    <div>
      <h1>Feedback</h1>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <button onClick={handleGoodFeedback}>Good</button>
    </div>
  );
}
export default App;
