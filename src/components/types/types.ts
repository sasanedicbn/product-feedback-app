export type ButtonProps = {
    type: 'login'  ;
    buttonType?: 'button' | 'submit' | 'reset'; 
    children: React.ReactNode;
    onClick: () => void; 
    disabled?: boolean; 
  }