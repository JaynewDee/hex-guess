import { Dispatch, SetStateAction, useMemo, useState } from "react";
import ColorBtn from "./ColorBtn";
import Feedback from "./Feedback";

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const getRandomIdx = () => Math.floor(Math.random() * 3);

const animations = {
  none: "none",
  wrong: "flash-wrong 1s infinite",
  correct: "glow-correct 1s",
};

const ColorBox = ({
  messageType,
  setMessageType,
  setStreakState,
}: {
  messageType: string;
  setMessageType: Dispatch<SetStateAction<string>>;
  setStreakState: Dispatch<SetStateAction<number>>;
}) => {
  const [correctColor, setCorrectColor] = useState("");
  const [colors, setColors] = useState([
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
  ]);
  const [animateState, setAnimateState] = useState(animations["none"]);

  const animate = (type: string) => {
    if (type === "wrong") {
      setAnimateState(animations["wrong"]);
      setStreakState(0);
    } else if (type === "correct") {
      setAnimateState(animations["correct"]);
      setStreakState((prev) => (prev += 1));
    }
    const animationDuration = 1000;
    setTimeout(() => {
      setAnimateState(animations["none"]);
    }, animationDuration);
  };

  const respond = (type: string) => {
    if (type === "wrong") {
      animate("wrong");
      setMessageType("fail");
    } else if (type === "correct") {
      animate("correct");
      setMessageType("win");
    }
  };

  useMemo(() => {
    setCorrectColor(colors[getRandomIdx()]);
  }, [colors]);

  const checkGuess = (e: any) => {
    if (e.target.innerText === correctColor) {
      respond("correct");
      setColors([getRandomColor(), getRandomColor(), getRandomColor()]);
    } else {
      respond("wrong");
    }
  };
  return (
    <div
      style={{ backgroundColor: correctColor, animation: animateState }}
      className="color-box"
    >
      {Object.values(colors).map((color: string) => {
        return <ColorBtn onClick={checkGuess} text={color} />;
      })}
      <Feedback type={messageType} />
    </div>
  );
};

export default ColorBox;
