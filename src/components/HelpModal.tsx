import React, { Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom";

const HelpModal = ({
  viewState,
  setViewState,
}: {
  viewState: boolean;
  setViewState: Dispatch<SetStateAction<boolean>>;
}) => {
  const component = ReactDOM.createPortal(
    <div className="help-modal">
      <button onClick={() => setViewState(false)} className="modal-exit-btn">
        X
      </button>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
  return viewState ? component : <div style={{ display: "none" }}></div>;
};

export default HelpModal;
