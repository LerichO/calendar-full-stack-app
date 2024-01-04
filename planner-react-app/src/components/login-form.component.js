import React, { Component } from 'react';
import axios from 'axios';

//localhost port 5000 will be a temporary server location for development
const API_ROOT_URL = `http://localhost:5000`


export default class LoginForm extends Component{

    constructor(props){
        super(props);

        this.onLogIn = this.onLogIn.bind(this);
        this.onSignUp = this.onSignUp.bind(this);

        this.state = {
            email : "",
            username : "",
            password : "",
            error : ""
        }

    }

    onLogIn(){

        const user = {
            email : this.state.email,
            username : this.state.username,
            password : this.state.password
        }

        console.log(user.username);

        //url of API endpoint is subject to change
        //remember to change up the spring app to find by email instead of username
        axios.get(API_ROOT_URL + `/users/${user.username}`, user.email)

    }

    onSignUp(){

        const user = {
            email : this.state.email,
            username : this.state.username,
            password : this.state.password
        }

        console.log(user.username);

        //url of API endpoint is subject to change
        //remember to change up the spring app to find by email instead of username
        axios.post(API_ROOT_URL + "/users/createUser", user.email)
        .then(res => console.log(res));
    }
    

    render(){
        return(
            <div className="relative m-8 p-3 bg-secondary text-text-primary">
                <form >
                    <div className="relative m-8 p-3 inline-block space-y-8">
                        <div>
                            <label>
                                <b>Email: </b>
                                <input type="text" placeholder="..."/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <b>Username: </b>
                                <input type="text" placeholder="..."/>
                            </label>
                        </div>
                       <div>
                        <label>
                                <b>Password: </b>
                                <input type="password" placeholder="..."/>
                            </label>
                       </div>
                        <div>
                            <div id="submit-container">
                                {/* check these buttons when testing for integration w/ spring */}
                                <div id="signup" onClick={()=>this.onSignUp}></div>
                                <div id="login" onClick={()=>this.onLogIn}></div>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}