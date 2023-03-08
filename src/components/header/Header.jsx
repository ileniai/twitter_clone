import { FiMenu} from "react-icons/fi";
import {HiSparkles} from"react-icons/hi"
import {BsFillImageFill} from"react-icons/bs"
import {RxAvatar} from"react-icons/rx"
import {AiOutlineFileGif} from"react-icons/ai"
import {GoGraph} from"react-icons/go"
import { useState } from "react";
import HamburgerMenu from "../hamburgerMenu";
import "./index.css"

const Header = () =>{

        const [showMenu, setShowMenu] = useState(false);
      
        const hamburgerShow = () => {
          setShowMenu(!showMenu);
      
          console.log(showMenu);
        };

    return(
        <div className="Header">
            <div className="Header__image">
                <FiMenu className="line_header1" onClick={hamburgerShow} />
                <HamburgerMenu showMenu={showMenu} />
                <img className="line_header" src="https://img.icons8.com/color/256/twitter--v1.png" alt="twitter logo" />
                <HiSparkles className="line_header2"/>
            </div>  
                <h2 className="title">Home</h2>
            <div className="Header__graph">
                <RxAvatar className="profile"/>
             <input type="text" placeholder="What's happening?" />
                <BsFillImageFill />
                <AiOutlineFileGif />
                <GoGraph /> 
            </div>
        </div>
    );
};

export default Header;