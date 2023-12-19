import React, { useState } from "react";
import CategoryItemOverview from "./CategoryItemOverview";


function CategoryItems(props) {

    //Hook used to expand the Category Items and set currentCategory
    const [cursorOnLi,setExpandDiv] = useState(false);
    const [currentCategory, setCurrentCategory] = useState("");

    // Function is called when mouse is Over the <li> tag
    function handleMouseEnter(event){
        setExpandDiv(true);
        setCurrentCategory(event.currentTarget.getAttribute('category-name'));
    }

    // Function is called when mouse leaves the <li> tag
    function handleMouseLeave(){
        setExpandDiv(false);
    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} category-name={props.Category} className="item" >
            <a href="https://www.google.com/" value={props.Category}>{props.Category}</a>{/* Example: Mattress */}
            {/* Conditional Rendering */}
            {cursorOnLi && <CategoryItemOverview 
            target={currentCategory}/>}
        </li>
    )
}

export default CategoryItems;