import Overlay from "./Overlay";

const Menu = ({ children }) => {
  return (
    <Overlay>
      <div className="bg-diagonal-gradient opacity-100 fixed right-0 bottom-0 p-8 flex flex-col gap-2 z-100">
        {children}
      </div>
    </Overlay>
  );
};

export default Menu;
