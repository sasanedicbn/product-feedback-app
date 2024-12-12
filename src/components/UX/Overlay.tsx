const Overlay = ({ children }) => {
  return (
    <div className="fixed top-20 opacity-60 bottom-0 left-0 right-0 bg-gray-400 z-10">
      {children}
    </div>
  );
};

export default Overlay;
