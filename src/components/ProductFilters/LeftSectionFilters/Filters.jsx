import React from "react";
import DynamicCheckBox from "../DynamicCheckBox";
import RangeSlider from "../RangeSlider";

function Filters() {

    //Filter this based on the Category Item selected
    const brandArray = ["Relaxwell","Nilkamal","Supreme","Galaxy"];
    const shapeArray = ["Rectangle", "Square", "Oval", "Circle", "L-shape"];
    const popularityArray = ["New collection", "Best Collection", "Best Value", "Sale"];
    const typeArray = ["Foam", "Memory Foam", "Supersoft Foam", "Plastic", "Wood", "Glass", "Marble", "MDF", "Fabric"];


    return (
        <div className="filters">
            <RangeSlider
                Title="Price ₹"
                min="100"
                max="100000"
            />
            <RangeSlider
                Title="Length (INCH)"
                min="5"
                max="250"
            />
            <RangeSlider
                Title="Width (INCH)"
                min="5"
                max="250"
            />
            <DynamicCheckBox
                checkBoxTitle="Shape"
                arrayData={shapeArray} />
            <DynamicCheckBox
                checkBoxTitle="Type"
                arrayData={brandArray} />
            <DynamicCheckBox
                checkBoxTitle="Type"
                arrayData={typeArray} />
            <RangeSlider
                Title="Max Occupancy"
                min="1"
                max="10"
            />
            <DynamicCheckBox
                checkBoxTitle="Popularity"
                arrayData={popularityArray} />

        </div>
    )
}

export default Filters;