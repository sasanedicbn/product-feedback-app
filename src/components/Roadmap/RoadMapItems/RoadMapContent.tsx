import { useState, useEffect } from "react";
import { fetchFeedbacksWithAllRelations } from "../../../supabase/supabaseFunctions";
import Planned from "./Planned";
import InProgress from "./InProgress";
import Live from "./Live";

const RoadMapContent = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacksHandler = async () => {
      const feedbacksData = await fetchFeedbacksWithAllRelations();
      setFeedbacks(feedbacksData);
    };

    fetchFeedbacksHandler();
  }, []);

  // Filtriraj podatke po tipu
  const plannedFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "Planned"
  );
  const inProgressFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "In Progress"
  );
  const liveFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "Live"
  );

  return (
    <div className="flex justify-between gap-8">
      <Planned feedbacks={plannedFeedbacks} />
      <InProgress feedbacks={inProgressFeedbacks} />
      <Live feedbacks={liveFeedbacks} />
    </div>
  );
};

export default RoadMapContent;
