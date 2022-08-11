import React from "react"
const Total = (props) => {
    return(
        <div>
            <p>
                Number of exercises  {props.Parts[0].exercises + props.Parts[1].exercises + props.Parts[1].exercises}
            </p>            
        </div>
    )

}
export default Total