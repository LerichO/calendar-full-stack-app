import React, { Component } from 'react';
import axios from 'axios';

//localhost port 5000 will be a temporary server location for development
const API_ROOT_URL = `http://localhost:5000`


export default class LoginForm extends Component{

    constructor(){
        super();

        this.onLogIn = this.onLogIn.bind(this);
        this.onSignUp = this.onSignUp.bind(this);

        this.state = {
            username : "",
            password : ""
        }

    }

    onLogIn(){

        const user = {
            username : this.state.username,
            password : this.state.password
        }

        console.log(user.username);

        //url of API endpoint is subject to change
        axios.get(API_ROOT_URL + `/users/${user.username}`, user)

    }

    onSignUp(){

        const user = {
            username : this.state.username,
            password : this.state.password
        }

        console.log(user.username);

        //url of API endpoint is subject to change
        axios.post(API_ROOT_URL + "/users/createUser", user)
        .then(res => console.log(res));
    }
    

    render(){
        return(
            <div className="relative m-8 p-3">
                <form>
                    <label>
                        <b>Username: </b>
                        <input type="text" placeholder="Username"/>
                    </label>
                    <label>
                        <b>Password: </b>
                        <input type="password" placeholder="Password"/>
                    </label>
                    <div id="submit-container">
                        {/* check these buttons when testing for integration w/ spring */}
                        <div id="signup" onClick={()=>{this.onSignUp}}></div>
                        <div id="login" onClick={()=>{this.onLogIn}}></div>
                    </div>
                </form>
            </div>
        );
    }
}