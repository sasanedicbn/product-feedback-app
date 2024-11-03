import { WrapperProps } from "../types/types";

const Wrapper = ({ children, type }:WrapperProps) => {
    const base = 'flex justify-between my-8 mx-auto';
    const styles = {
        pageWrapper: `${base} w-full sm:w-1/2 md:w-1/3 lg:w-1/4`, 
    };
    return (
      <div className={styles[type]}>
        {children}
      </div>
    );
};

export default Wrapper;