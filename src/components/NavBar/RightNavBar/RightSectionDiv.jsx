import React,{useState} from "react";
import { IoIosArrowForward } from "react-icons/io";

function RightSectionDiv(props) {
    const altTxt = `${props.label} Image`;
    const [hover, setHover] = useState(false);

    const style = {
        border: `2px solid ${hover ? 'blue' : null}`, // Change color on hover
        backgroundColor: `${hover ? "lightblue":null}`
    };
    function handleChange(){

    }
    return (
        <div >
            <div style={style} className="imageBlock" onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
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