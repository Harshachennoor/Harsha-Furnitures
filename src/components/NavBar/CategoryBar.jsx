import React from "react";
import CategoryItems from "./CategoryItems";

function CategoryBar() {
    const Categories = ["Mattress", "Sofas", "Tables", "Chairs", "Beds", "Storage", "Accessories"]
    return (
        <div className="CategoryBar">
            <ul className="item">
                {/* Display for all Categories total of 7*/}
                {Categories.map((category) => (
                    <CategoryItems key={category.id} Category={category} />
                ))}
            </ul>
        </div>
    )
}

export default CategoryBar;