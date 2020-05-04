import React from "react";

function StudentDetails(props) {
    return(
        <div>
            <ul>
                <li>{props.data.name}</li>
                <li>{props.data.roll}</li>
                <li>{props.data.class}</li>
                <li>{props.data.section}</li>
            </ul>
            <button onClick={() => props.delete(props.data.roll)}/>
            <button onClick={() => props.modify(props.data.roll)}/>
        </div>
    )
}

export default StudentDetails