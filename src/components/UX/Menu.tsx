import Overlay from "./Overlay";
import Icon from "./Icon";

const Menu = ({
  children,
  onClose,
}: {
  children: any;
  onClose: () => void;
}) => {
  return (
    <>
      <Overlay />
      <div className="bg-diagonal-gradient fixed right-0 top-0 p-8 flex flex-col gap-4 z-20">
        <div className="flex justify-end">
          <Icon
            name="close"
            color="black"
            size={24}
            onClick={onClose}
            className="cursor-pointer"
          />
        </div>
        {children}
      </div>
    </>
  );
};

export default Menu;
