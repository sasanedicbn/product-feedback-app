import { WrapperProps } from "../types/types";

const Wrapper = ({ children, type }:WrapperProps) => {
    const base = 'flex justify-between my-8 mx-auto';
    const baseSideBar = 'h-[150px] rounded-xl p-6 bg-gradient-to-br'
    const styles = {
        pageWrapper: `${base} w-full sm:w-1/2 md:w-1/3 lg:w-1/4`, 
        sideBarTitle: `${baseSideBar} from-blue-400 via-teal-300 to-green-300`,
        sideBarItem: `${baseSideBar}`
    };
    return (
      <div className={styles[type]}>
        {children}
      </div>
    );
};

export default Wrapper;