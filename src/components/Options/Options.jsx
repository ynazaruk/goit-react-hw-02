import { useState } from "react";

export default function Options() {
  const [respond, setRespond] = useState(0);
  const updateFeedback = () => {
    setRespond(respond + 1);
  };

  return (
    <div>
      <button onClick={updateFeedback}>Good {respond}</button>
    </div>
  );
}
