import "./index.css";
import MenuContent from "../menuContent"

const HamburgerMenu = ({ showMenu }) => {
  return (
    <div className={`HamburgerMenu ${showMenu ? "show" : ""}`}>
      <MenuContent />
    </div>
  );
};

export default HamburgerMenu;