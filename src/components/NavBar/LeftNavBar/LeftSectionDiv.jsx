import React from "react";
import ListWithLink from "./ListWithLink";

function LeftSectionDiv(props) {

    const categoryItemsList = {
        "Mattress": ["Twin and Twin XL", "Double and Double XL", "Queen and Queen XL", "King and King XL", "Customize"],
        "Sofas": ["Couches", "3+2 Seaters", "Sectional", "Recliners", "Customize"],
        "Tables": ["Office Tables", "Dining Tables", "Coffee and END Tables", "Computer Tables", "Customize"],
        "Chairs": ["Office Chairs", "Dining Chairs", "Visitor Chairs", "Personal Chairs", "Stools and Bar Stools"],
        "Beds": ["Twin and Twin XL", "Double and Double XL", "Queen and Queen XL", "King and King XL", "Customize"],
        "Storage": ["Metal Cabinets", "Office Cabinets", "Plastic Cabinets"],
        "Accessories": ["Coolers", "Pillows", "Comforters", "Protectors", "Bean Bags"]
    };
    const currentCategory = props.CategoryList;
    const categoryArray = categoryItemsList[currentCategory];

    return (
        <div className="leftCatColDiv">
            <div>
                <ul>
                    <p className="CategoryName">{currentCategory}</p>
                    {categoryArray && categoryArray.map((value, index) => (
                        <li key={index}>
                            <ListWithLink
                                className="ItemsList"
                                itemUrl="https://www.google.com/"
                                itemListName={value} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default LeftSectionDiv;