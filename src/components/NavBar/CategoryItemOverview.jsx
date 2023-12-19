import React from "react";
import LeftSectionDiv from "./LeftNavBar/LeftSectionDiv";
import RightSectionDiv from "./RightNavBar/RightSectionDiv";
import newCollectionImage from "./RightNavBar/collectionImages/newCollection.png";
import bestsellerCollectionImage from "./RightNavBar/collectionImages/bestsellerCollection.png";
import bestvalueCollectionImage from "./RightNavBar/collectionImages/bestvalueCollection.png";
import saleCollectionImage from "./RightNavBar/collectionImages/saleCollection.png";

function CategoryItemOverview(props) {
    return (
        <div className="expandedDiv">
            <div className="multiStackDiv">{/* has to flex with border between left and right */}
                <LeftSectionDiv
                    CategoryList={props.target} />
                <div className="rightCatSaleDiv">
                    <div className="rightPicDiv">{/* has to be flex */}
                        <RightSectionDiv
                            newUrl={newCollectionImage}
                            link="https://github.com/"
                            label="New"
                        />
                        <RightSectionDiv
                            newUrl={bestsellerCollectionImage}
                            link="https://github.com/"
                            label="Bestseller"
                        />
                        <RightSectionDiv
                            newUrl={bestvalueCollectionImage}
                            link="https://github.com/"
                            label="BestValue"
                        />
                        <RightSectionDiv
                            newUrl={saleCollectionImage}
                            link="https://github.com/"
                            label="Sale"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryItemOverview;