import React from "react";
import { render } from "@testing-library/react";

import AddStudent from "./AddStudent"
import StudentDetails from "./StudentDetails"

class Student extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "",
            roll: "",
            class: "",
            section: "",
            errMsg: "",
            data: []
        }
        this.addStudentData=this.addStudentData.bind(this)
        this.inputChange=this.inputChange.bind(this)
        this.deleteData=this.deleteData.bind(this)
        this.modifyData=this.modifyData.bind(this)
    }

    validate(){
        let sec=this.state.section.toUpperCase()

        let errMsg
        if(!this.state.name.length){
            errMsg="Input Name!!"
        }else if(!this.state.roll.length){
            errMsg="Input Roll!!"
        }else if(!this.state.class.length){
            errMsg="Input Class!!"
        }else if(!this.state.section.length){
            errMsg="Input Section!!"
        }else if(sec.length>=2 || sec[0]>'F'){
            errMsg="Input Valid Section!!"
        }else{
            errMsg=""
        }
        return errMsg
    }

    addStudentData(){
        let errMsg=this.validate()
        if (!errMsg.length) {
            const data = {
                name: this.state.name,
                roll: this.state.roll,
                class: this.state.class,
                section: this.state.section
            }
            const list = [...this.state.data]
            list.push(data)
            this.setState({
                name: "",
                roll: "",
                class: "",
                section: "",
                errMsg,
                data: list
            })
        }else{
            this.setState({
                errMsg
            })
        }
    }

    inputChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    deleteData(id){
        const data=[...this.state.data]
        const updatedData = data.filter(data => data.roll!==id)
        this.setState({
            data: updatedData
        })
    }

    modifyData(id){
        const list=[...this.state.data]
        const updatedData = list.filter(data => data.roll!==id)
        const modifyData=list.filter(data => data.roll===id)
        this.setState({
            name: modifyData[0].name,
            roll: modifyData[0].roll,
            class: modifyData[0].class,
            section: modifyData[0].section,
            data: updatedData
        })
    }

    render() {
        return (
            <div>
                <AddStudent inputChange={this.inputChange} addStudent={this.addStudentData} state={this.state}/>
                <div>
                    <ul>
                        <li>Name</li>
                        <li>Roll</li>
                        <li>Class</li>
                        <li>Section</li>
                    </ul>
            </div>
                {this.state.data.map(data => <StudentDetails 
                                                key={data.roll} 
                                                data={data} 
                                                delete={this.deleteData}
                                                modify={this.modifyData}/>)}
            </div>
        )
    }

}

export default Student;