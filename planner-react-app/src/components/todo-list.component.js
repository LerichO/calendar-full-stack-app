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

        // url of API endpoint is subject to change
        axios.get(`http://localhost:5000/users/${username}`)
        .then(response => {
            this.setState({
                user : response.data.user,
                todo: response.data.todo
            })
        })
    }

    renderToDoItem(item){

        var title;
        var description;
        var date;
        var completed;

        // url of API endpoint is subject to change
        axios.get(`http://localhost:5000/todo/${item}`)
        .then(response => {
            title = response.data.title;
            description = response.data.description;
            date = response.data.date;
            completed = response.data.completed;
        })

        return(
            <ToDoItem title={title} description={description} />
        );
    }

    render(){
        return (
            <div className="m-3">
                <ul>
                    {/* Will use JavaScript to iterate through 
                    props to add ToDoItems when implemented */}

                    {
                        this.state.todo.forEach(renderToDoItem)
                    }

                    {/* stand in ToDoItem for now */}
                    <ToDoItem title="Thing 1" description="Do this thing"/>
                </ul>
            </div>
        );
    }
}
