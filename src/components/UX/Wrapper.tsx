import { WrapperProps } from "../types/types";

const Wrapper = ({ children, type }: WrapperProps) => {
  const base = "flex justify-between my-8 mx-auto";
  const baseSideBar = "h-[175px] rounded-lg w-[270px]";
  const styles = {
    pageWrapper: `${base} w-full sm:w-1/2 md:w-1/3 lg:w-1/4`,
    sideBarTitle: `${baseSideBar}  flex items-center justify-between bg-diagonal-gradient h-[85px] w-full md:w-[270px] p-3  md:h-[175px]  `,
    sideBarItem: `${baseSideBar} p-6 bg-white mb-4  md:inline-block lg: bg-red-300   `,
    feedBackContainer: `bg-white w-full p-5 rounded-lg flex justify-between items-center px-2 mb-4 mr-2 sm:px-6`,
    feedBackComments: `bg-white flex flex-col w-full pt-5 rounded-lg flex justify-between items-center px-6 pb-4 mb-4`,
  };
  return <div className={styles[type]}>{children}</div>;
};

export default Wrapper;
