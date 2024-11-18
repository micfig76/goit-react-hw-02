import React from "react";
function Options({
  onGoodFeedback,
  onNeutralFeedback,
  onBadFeedback,
  onResetFeedback,
  hasFeedback,
}) {
  return (
    <div>
      <button onClick={onGoodFeedback}>Good</button>
      <button onClick={onNeutralFeedback}>Neutral</button>
      <button onClick={onBadFeedback}>Bad</button>
      {hasFeedback && <button onClick={onResetFeedback}>Reset</button>}
    </div>
  );
}
export default Options;
