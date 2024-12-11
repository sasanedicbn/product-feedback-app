import { useState, useEffect } from "react";
import { fetchFeedbacksWithAllRelations } from "../../../supabase/supabaseFunctions";
import FeedbackList from "./FeedbackList";

const RoadMapContent = () => {
  const [feedbacks, setFeedbacks] = useState([]);

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
      setFeedbacks(feedbacksData as any);
    };

    fetchFeedbacksHandler();
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between px-2 gap-2 sm:gap-4 md:gap-8 md:mx-2">
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
