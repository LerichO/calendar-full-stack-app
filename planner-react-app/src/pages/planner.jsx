import React, { useState } from "react";
import ToDoList from "../components/todo-list.component";

//this and redirect-btn will need to be completely redone to accomadate API connection
//complete login portal that redirects to this page
export default function Planner(){

    const [token, setToken] = useState(null);

    if(!token){
        return(
            <div>
                <main className="">
                    <h1>You are not logged in!</h1>
                    <p>Please log in or make an account to access your Planner.</p>
                </main>
            </div>
        );
    }

    return(
        <div>
            Welcome to your Planner
            <ToDoList />
        </div>
    );
}
