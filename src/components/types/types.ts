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

