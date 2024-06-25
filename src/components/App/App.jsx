import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

export default function App() {
  const updateFeedback = (feedbackType) => {
    const updateRespond = {
      ...respond,
      [updateFeedback]: respond[feedbackType] + 1,
    };
  };

  return (
    <div>
      <Description />
      <Options />
      <Options />
      <Options />
      <Feedback />
    </div>
  );
}
