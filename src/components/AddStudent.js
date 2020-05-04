import React from "react";

function AddStudent(props) {
    return (
        <div>
            <form>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={props.state.name}
                    onChange={props.inputChange} />

                <input
                    name="roll"
                    type="number"
                    placeholder="Roll"
                    min="1"
                    value={props.state.roll}
                    onChange={props.inputChange} />

                <input
                    name="class"
                    type="number"
                    placeholder="Class"
                    min="1"
                    max="12"
                    value={props.state.class}
                    onChange={props.inputChange} />

                <input
                    name="section"
                    type="text"
                    placeholder="Section"
                    value={props.state.section}
                    onChange={props.inputChange} />
            </form>
            <button
                onClick={props.addStudent}/>
            <h3>{props.state.errMsg}</h3>
        </div>
    )
}

export default AddStudent;



