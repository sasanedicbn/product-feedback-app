import { ChangeEvent, ReactNode } from "react";

export type ButtonProps = {
    type: 'login' | 'cancelFeedBack' | 'addFeedBack' | 'replay' | 'iconSignUp' | 'buttonType' | 'editFeedBack' | string;
    buttonType?: 'button' | 'submit' | 'reset'; 
    children: React.ReactNode;
    onClick?: () => void; 
    disabled?: boolean; 
  }
  
export type InputProps = {
    styleType: 'feedback' | 'addFeedBack',
    type: string,
    name: string,
    value: string,
    placeholder: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type LabelProps = {
    text: string;
    type: 'addFeedBack' | 'back' | 'backRoadMap';
}

export type SelectProps = {
    name: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode; 
    value?: any;
    className?: string;
}

export type OptionProps = {
    value: string; 
    children: React.ReactNode; 
}

export type WrapperProps = {
    children: ReactNode; 
    type: 'pageWrapper' | 'sideBarTitle' |  'sideBarItem' | 'feedBackContainer' | 'feedBackComments'; 
  }
  
export type RoadmapItemProps = {
    label: string,
    count: number,
    status: 'planned' | 'inProgress' | 'live'
}

export type IconProps = {
    name: 'suggestion' | 'plus' | 'down' | 'up' | 'check' | 'message' | 'back' | 'search' | 'close';
    size?: number;
    color?: string;
    onClick?: () => void;
    type?: string;
  }


  export type ActionProps = {
    iconName: string;  
    iconColor: string;
    iconSize: number;
    text: string;
    labelType: string,
    onClick: () => void;
};

export type Category = {
    Category: string;
}

export type Comment = {
    id: number | string;
    content: string;
}

export type FeedbackItem = {
    id: number | string;
    title: string;
    feedback: string;
    Category: Category;
    comments: Comment[];
}

export type OptionType = "Most Upvotes" | "Least Upvotes" | "Most Comments" | "Least Comments";

export type DropDownProps = {
    options: OptionType[];
    selectedOption: OptionType;
    onOptionSelect: (option: OptionType) => void;
};

export type TextareaProps = {
  placeholder?: string;
  rows?: number;
  value: string;
  additionalStyles?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength?: number;
};


export type Comments = {
    id: string; 
    user_image: string;
    user: string;
    user_name: string;
    user_comment: string;
}

export type FeedBackCommentsProps = {
    feedback: {
        Comments: Comments[] | null;
    };
}
export type CommentCardProps = {
    user_image: string;
    user: string;
    user_name: string;
    user_comment: string;
    answers?:[];
    buttonType?: string;
    containerClass?: string;
    type?: boolean,
    postId?: string,
    answerId:string,

}
export type CommentState = {
    user_comment: string;
    user?: string;
    user_name?: string;
    user_image?: string;
    feedback_id?: string;
  };
export type lengthCommentsProps = {
  length: number,
  postCommentHandler: () => void,
}
export  type ContentItemProps = {
    title: string;
    feedback: string;
    category: string;
    itemId?: string | number | null;
  };
export type  Feedback = {
    id: number;
    title: string;
    description: string;
    type: "Planned" | "Progress" | "Live";
    [key: string]: any; 
  }
export type  FeedbackListProps = {
    title: string;
    description: string;
    type: "Planned" | "Progress" | "Live";
    feedbacks: Feedback[];
  }
  type AnswerType = {
    comment_user_answer?: {
      user_image?: string;
      user?: string;
      user_name?: string;
      id?: string;
      answerId?:string,
    };
    answer: string;
  };
  
 export  type CommentAnswersProps = {
    answer: AnswerType;
  };