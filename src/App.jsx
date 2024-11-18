import React, { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
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
  const positivePercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;
  const hasFeedback = totalFeedback > 0;
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
        hasFeedback={hasFeedback}
      />
      {hasFeedback ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}
export default App;
