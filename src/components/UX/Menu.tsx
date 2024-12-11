const Menu = ({ children }) => {
  return (
    <div className="bg-gray-200 fixed right-0 p-8 flex flex-col gap-2">
      {children}
    </div>
  );
};

export default Menu;
