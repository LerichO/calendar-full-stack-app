import React, { Component } from 'react';

import ToDoItem from "./todo-item";

export default class ToDoList extends Component{

    constructor(props){

        super(props)

        //bind 'this' of each method to 'this' class
        // this.

        //initialize state of this component
        this.state = {
            username : "",
            todo : []
        }
    }

    componentDidMount(){

        //url of API endpoint is subject to change
        axios.get(`http://localhost:5000/users/${username}`)
        .then(response => {
            this.setState({
                user : response.data.user,
                todo: response.data.todo
            })
        })
    }

    renderToDoItem(){

        return this.state.todo.map(todoItemId => {
            //url of API endpoint is subject to change
            axios.get(`http://localhost:5000/todo/${todoItemId}`)
            .then(response => {
                return <ToDoItem 
                    title={response.data.title}
                    description={response.data.description}
                    date={response.data.date}
                    completed={response.data.completed}
                />
            })
        })
    }

    render(){
        return (
            <div className="m-3">
                <b>{this.state.username}'s To-Do List</b>
                <ul>
                    {/* Will use JavaScript to iterate through 
                    props to add ToDoItems when implemented */}

                    { this.renderToDoitem() }

                    {/* stand in ToDoItem for now */}
                    <ToDoItem title="Thing 1" description="Do this thing"/>
                </ul>
            </div>
        );
    }
}
