import { useState } from "react";
import "./Game.css";
import ColorBox from "./components/ColorBox";
import ScoreBoard from "./components/ScoreBoard";
import HelpModal from "./components/HelpModal";
import HelpBtn from "./components/HelpBtn";

function Game() {
  const [messageType, setMessageType] = useState("");
  const [streakState, setStreakState] = useState(0);
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="help-box">
        <HelpBtn setModal={setModal} />
      </div>
      <HelpModal viewState={modal} setViewState={setModal} />
      <div className="title">GUESS THE HEX</div>
      <div className="App">
        <ColorBox
          messageType={messageType}
          setMessageType={setMessageType}
          setStreakState={setStreakState}
        />
      </div>
      <ScoreBoard streakState={streakState} />
    </>
  );
}

export default Game;
