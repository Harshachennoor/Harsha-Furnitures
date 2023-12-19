import React from "react";

function ListWithLink(props){
    return(
        <li>
            <a href={props.itemUrl} >{props.itemListName}</a>
        </li>
    )
}

export default ListWithLink;