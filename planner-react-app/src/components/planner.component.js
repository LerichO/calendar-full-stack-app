import React, { Component } from "react";
import ToDoList from "./todo-list";

//this and redirect-btn will need to be completely redone to accomadate API connection
//complete login portal that redirects to this page
export default class Planner extends Component{
    render(){
        return(
            <div>
                Welcome to your Planner
                <ToDoList />
            </div>
        );
    }
}
