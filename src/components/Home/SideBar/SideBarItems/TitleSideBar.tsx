import { motion } from "framer-motion";
import Wrapper from "../../../UX/Wrapper";
import { useSelector } from "react-redux";
import Logout from "../../../../auth/Logout";
import { RootState } from "../../../store/store";
import Icon from "../../../UX/Icon";
import { useState } from "react";
import Menu from "../../../UX/Menu";
import Category from "./Category";
import Roadmap from "./Roadmap";
import Overlay from "../../../UX/Overlay";

const TitleSideBar = () => {
  const currentUser = useSelector((user: RootState) => user.user.user);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <Wrapper type="sideBarTitle">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-xl text-gray-500 font-medium flex md:block"
      >
        <img
          src={currentUser.user_image}
          alt="User"
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-blue-950 text-base sm:text-lg">
                {currentUser.full_name}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm font-light">
                {currentUser.user_name}
              </p>
              <Logout />
            </div>
          </div>
        </div>
      </motion.div>
      <div className="block pointer md:hidden  ">
        <Icon
          name="menuBurger"
          size={26}
          color="black"
          onClick={() => toggleMenu()}
        />
      </div>
      {openMenu && (
        <Menu>
          <Category />
          <Roadmap />
        </Menu>
      )}
    </Wrapper>
  );
};

export default TitleSideBar;
