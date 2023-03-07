import { FiMenu} from "react-icons/fi";

import { useState } from "react";
import HamburgerMenu from "../hamburgerMenu";
import "./index.css"

const Header = () =>{

        const [showMenu, setShowMenu] = useState(false);
      
        const hamburgerTrigger = () => {
          setShowMenu(!showMenu);
      
          console.log(showMenu);
        };

    return(
        <div className="Header">
            <div className="Header__image">
                <FiMenu className="line_header1" onClick={hamburgerTrigger} />
                <HamburgerMenu showMenu={showMenu} />
                <img className="line_header" src="https://img.icons8.com/color/256/twitter--v1.png" alt="twitter logo" />
                <img className="line_header" src="https://img.icons8.com/material-rounded/256/sparkling.png" alt="sparkling" />
            </div>   
        </div>
    );
};

export default Header;