import React, { Component } from 'react';

export default class ToDoItem extends Compnent{

    constructor(props){
        super(props)

        this.markCompleted = this.markCompleted.bind(this);
        this.state = {title : "", description : "", date : new Date()}
    }

    componentDidMount(){

        //localhost port 5000 temporary server location for development
        axios.get('http://localhost:5000/users/')
        .then(response => {
            this.setState({
                username : response.data.user
            })
        })

        //still need to find a way to get ObjectID from MongoDB doc of todo items
        // axios.get(`http://localhost:5000/${ObjectID}`).then()

    }

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