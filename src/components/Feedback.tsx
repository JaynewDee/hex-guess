import { failMessage, winMessage } from "../data/message";
const getRandomIdx = (length: number) => Math.floor(Math.random() * length);

const messageSwitch = (type: string) => {
  if (type === "win") return winMessage[getRandomIdx(winMessage.length)];
  else if (type === "fail")
    return failMessage[getRandomIdx(failMessage.length)];
  else return "---";
};

const Feedback = ({ type }: { type: string }) => {
  return <div className="feedback-box">{messageSwitch(type)}</div>;
};

export default Feedback;
