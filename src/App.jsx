import React, { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import "./App.css";

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleGoodFeedback = () => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      good: prevFeedback.good + 1,
    }));
  };

  const handleNeutralFeedback = () => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      neutral: prevFeedback.neutral + 1,
    }));
  };

  const handleBadFeedback = () => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      bad: prevFeedback.bad + 1,
    }));
  };
  const handleResetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div>
      <Description
        title="Sip Happens Café"
        content="Please leave your feedback about our service by selecting one of the options below."
      />
      <h1>Feedback</h1>
      <Options
        onGoodFeedback={handleGoodFeedback}
        onNeutralFeedback={handleNeutralFeedback}
        onBadFeedback={handleBadFeedback}
        onResetFeedback={handleResetFeedback}
      />
      {totalFeedback > 0 && (
        <Feedback feedback={feedback} total={totalFeedback} />
      )}
    </div>
  );
}
export default App;
