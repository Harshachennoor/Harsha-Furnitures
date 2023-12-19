import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function RightSectionDiv(props) {
    const altTxt = `${props.label} Image`;
    return (
        <div className="imageBlock">
            <div >
                <a href={props.link}>
                    <div>
                        <div>
                            <img src={props.newUrl} alt={altTxt} />
                        </div>
                    </div>
                    <div className="ImageNameDiv">{/* Has to be flex */}
                        <span>{props.label} Collection</span>
                        <IoIosArrowForward />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default RightSectionDiv;