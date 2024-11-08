import { WrapperProps } from "../types/types";

const Wrapper = ({ children, type }:WrapperProps) => {
    const base = 'flex justify-between my-8 mx-auto';
    const baseSideBar = 'h-[175px] rounded-lg p-6'
    const styles = {
        pageWrapper: `${base} w-full sm:w-1/2 md:w-1/3 lg:w-1/4`, 
        sideBarTitle: `${baseSideBar} bg-diagonal-gradient mb-4`,
        sideBarItem: `${baseSideBar} bg-white mb-4 `
    };
    return (
      <div className={styles[type]}>
        {children}
      </div>
    );
};

export default Wrapper;