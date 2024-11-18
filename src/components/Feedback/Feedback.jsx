import React from "react";
function Feedback({ feedback, total }) {
  return (
    <div>
      <h2>Feedback Summary</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total Feedback: {total}</p>
    </div>
  );
}

export default Feedback;
