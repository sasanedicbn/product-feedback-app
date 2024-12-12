const Menu = ({ children }) => {
  return (
    <div className="bg-diagonal-gradient  fixed right-0 bottom-0 p-8 flex flex-col gap-2 z-10">
      {children}
    </div>
  );
};

export default Menu;
