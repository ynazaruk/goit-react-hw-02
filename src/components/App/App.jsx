import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import { useState, useEffect } from "react";

export default function App() {
  const initialFeetback = JSON.parse(localStorage.getItem("feedback")) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(initialFeetback);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify("feedback"));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivFeedback = totalFeedback
    ? Math.round((good / totalFeedback) * 100)
    : 0;

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        positivFeedback={positivFeedback}
        resetFeedback={resetFeedback}
      />
      <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positivFeedback={positivFeedback}
      />
    </div>
  );
}
