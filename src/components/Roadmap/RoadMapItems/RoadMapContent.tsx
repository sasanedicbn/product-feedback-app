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

  return (
    <div className="flex justify-between gap-8">
      <Planned feedbacks={feedbacks} />
      <InProgress feedbacks={feedbacks} />
      <Live feedbacks={feedbacks} />
    </div>
  );
};

export default RoadMapContent;
