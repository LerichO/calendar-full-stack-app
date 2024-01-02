import React, { Component } from 'react';

import ToDoItem from "./todo-item";

export default class ToDoList extends Component{

    constructor(props){

        super(props)

        //bind 'this' of each method to 'this' class
        // this.

        //initialize state of this component
        this.state = {
            user : "",
            todo : []
        }
    }

    componentDidMount(){

        axios.get(`http://localhost:5000/${ObjectID}`)
        .then(response =>{
            this.setState({
                user : response.data.user,
                todo: response.data.todo
            })
        })
    }

    render(){
        return (
            <div className="m-3">
                <ul>
                    {/* Will use JavaScript map function to iterate
                    through props to add ToDoItems when implemented */}

                    {/* stand in ToDoItem for now */}
                    <ToDoItem title="Thing 1" description="Do this thing"/>
                </ul>
            </div>
        );
    }
}
