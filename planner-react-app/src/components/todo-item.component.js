import React, { Component } from 'react';
import axios from 'axios';

//localhost port 5000 will be a temporary server location for development
const API_ROOT_URL = `http://localhost:5000`

export default class ToDoItem extends Compnent{

    constructor(props){
        super(props);

        this.markCompleted = this.markCompleted.bind(this);
        this.state = {
            title : "",
            description : "",
            date : new Date(),
            completed : false
        }
    }

    componentDidMount(){

        //localhost port 5000 temporary server location for development
        axios.get(API_ROOT_URL + '/users/')
        .then(response => {
            this.setState({
                user : response.data.user
            })
        })

        //url of API endpoint is subject to change
        // axios.get(`http://localhost:5000/${ObjectID}`).then()

    }

    /* Will undergo an HTTP UPDATE request and handle updating the
     * MongoDB collections with the updated status of the todo item.
    */
    markCompleted(){

    }

    render(){
        return(
            <div className="relative m-8 p-3 h-[110px] w-[600px] bg-secondary rounded-md text-text-primary content-center">
                <b className="m-1">{this.state.title}</b>
                <p className="m-1">{this.state.description}</p>
                <time className="m-1" datetime="2023-12-12">December 12</time>
            </div>
        );
    }
}