import React from "react";
function Feedback({ feedback, total, positivePercentage }) {
  return (
    <div>
      <h2>Feedback Summary</h2> <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p> <p>Bad: {feedback.bad}</p>
      <p>Total Feedback: {total}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
}
export default Feedback;
