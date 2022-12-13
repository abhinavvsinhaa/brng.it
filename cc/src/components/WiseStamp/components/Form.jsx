import React from "react";
function Form (props) {
    return(
        <div>
            <form>
                <label>{props.name}</label>
                    <br />
                    <input type={props.type}/>
            </form>
        </div> 
    )
};

export default Form;