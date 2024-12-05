import { useState, useEffect } from "react";
import { fetchFeedbacksWithAllRelations } from "../../../supabase/supabaseFunctions";
import FeedbackList from "./FeedbackList";

const RoadMapContent = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Predefinišemo sekcije
  const sections = [
    {
      title: "Planned",
      description: "Ideas prioritized for research",
      type: "Planned",
    },
    {
      title: "In Progress",
      description: "Currently being developed",
      type: "Progress",
    },
    {
      title: "Live",
      description: "Ideas that have been released",
      type: "Live",
    },
  ];

  useEffect(() => {
    const fetchFeedbacksHandler = async () => {
      const feedbacksData = await fetchFeedbacksWithAllRelations();
      setFeedbacks(feedbacksData);
    };

    fetchFeedbacksHandler();
  }, []);

  return (
    <div className="flex justify-between gap-8">
      {sections.map((section) => (
        <FeedbackList
          key={section.type}
          title={section.title}
          description={section.description}
          type={section.type}
          feedbacks={feedbacks}
        />
      ))}
    </div>
  );
};

export default RoadMapContent;
