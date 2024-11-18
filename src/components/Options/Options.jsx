import React from "react";
function Options({ updateFeedback, onResetFeedback }) {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button onClick={onResetFeedback}>Reset</button>
    </div>
  );
}
export default Options;
