import React from "react";

const ScoreBoard = ({ streakState }: { streakState: number }) => {
  return (
    <div className="scoreboard">
      <div className="streak-num">{streakState}</div>
      <div className="streak-label">STREAK</div>
    </div>
  );
};

export default ScoreBoard;
