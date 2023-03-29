import React from "react";

function TodoItem(props){

    return (
    <div onClick={() =>{
        props.onChecked(props.id)
    }} >
        <li>{props.type}</li>
    </div>
    );
}

export default TodoItem;