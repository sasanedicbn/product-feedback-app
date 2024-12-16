const Overlay = ({ children }: any) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-400 opacity-60 z-10">
      {children}
    </div>
  );
};

export default Overlay;
