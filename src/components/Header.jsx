import React from "react";
import logo from "./logo36.png";
// import { HiOutlineSearch } from "react-icons/hi";
import { TbHomeSearch } from "react-icons/tb";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import SearchBar from "./SearchBar";

function Header(){
    return(
        <header>
            <img src={logo} alt="Company logo" />
            <h3>Harsha Furnitures</h3>
            <SearchBar />
            {/* <button ><HiOutlineSearch /></button> */}
            <button ><TbHomeSearch /></button>
            <button ><RiAccountCircleLine /></button>
            <button ><MdOutlineFavoriteBorder /></button>
            <button className="reSize"><FaRegFileAlt /></button>
            <button><GrCircleInformation /></button>
        </header>
    )
}

export default Header;