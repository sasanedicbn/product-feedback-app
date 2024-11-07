import { ReactNode } from "react";

export type ButtonProps = {
    type: 'login'  ;
    buttonType?: 'button' | 'submit' | 'reset'; 
    children: React.ReactNode;
    onClick: () => void; 
    disabled?: boolean; 
  }
  
export type InputProps = {
    styleType: 'feedback',
    type: string,
    name: string,
    value: string,
    placeholder: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type LabelProps = {
    text: string;
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
    type: 'pageWrapper' | 'sideBarTitle' |  'sideBarItem' | 'content'; 
  }
  
export type RoadmapItemProps = {
    label: string,
    count: number,
    status: 'planned' | 'inProgress' | 'live'
}

export type IconProps = {
    name: 'suggestion';
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
    onClick: () => void;
};
