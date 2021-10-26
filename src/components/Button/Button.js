import "./Button.css";
import { useState } from "react";

function Button() {
  const [button, setButton] = useState(false);
  return (
    <div className="showAndHide">
      <button className="button" onClick={() => setButton(!button)}>
        {button ? "Click again" : "Hey you! Click on me"}
      </button>
      {button && <div className="title">Click again and it's gone!</div>}
    </div>
  );
}

export default Button;
