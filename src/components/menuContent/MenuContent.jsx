import { AiOutlineHome } from "react-icons/ai"
import { HiHashtag } from "react-icons/hi"
import { BiBell } from "react-icons/bi"
import { BsEnvelope } from "react-icons/bs"
import { MdOutlineBookmarkBorder } from "react-icons/md"
import "./index.css";

const MenuContent = () => {
  return (
    <div className="MenuContent">
      <ul>
      <li>
        <img className="simbols_menu"
          src="https://img.icons8.com/color/256/twitter--v1.png"
          alt="twitter logo"
        />
      </li>
      <li>
        <AiOutlineHome className="simbols_menu" />
        <p className="property__menu">Home</p>
      </li>
      <li>
        <HiHashtag className="simbols_menu"/>
        <p className="property__menu">Explore</p>
      </li>
      <li>
        <BiBell className="simbols_menu"/>
        <p className="property__menu">Notifications</p>
      </li>
      <li>
        <BsEnvelope className="simbols_menu"/>
        <p className="property__menu">Messages</p>
      </li>
      <li>
        <MdOutlineBookmarkBorder className="simbols_menu"/>
        <p className="property__menu">Bookmarks</p>
      </li>
    </ul>
    <button>Tweet</button>
    </div> 
  );
};

export default MenuContent;