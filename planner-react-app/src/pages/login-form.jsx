import React, { useEffect, useRef, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from "../context/AuthProvider";
import CircumIcon from "@klarr-agency/circum-icons/react";

const API_ROOT_URL = `http://localhost:5000`;

const LoginForm = () => {

    // auth example using context from https://youtu.be/X3qyxo_UTR4 tutorial
    const { setAuth } = useContext(AuthContext);

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //cannot read properties of underfined focus function
    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    //
    useEffect(() => {
        setError('');
    }, [username, password])

    const onLogIn = async(e) => {
        e.preventDefault();

        const user = {
            username: username,
            password: password,
        };

        console.log("Log in - USER: " + user.username + "\tPASSWORD: " + user.password);
        setUsername('');
        setPassword('');

        // axios.get(`${API_ROOT_URL}/users/${user.username}`, user.username);
    };

    const onSignUp = async(e) => {

        e.preventDefault();

        const user = {
            username: username,
            password: password,
        };

        console.log("Sign Up - USER: " + user.username + "\tPASSWORD: " + user.password);
        setUsername('');
        setPassword('');

        // axios.post(`${API_ROOT_URL}/users/createUser`, user.username).then((res) => console.log(res));

        //testing JWT token session authentication example from clerk.com
        fetch("/api/auth", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.message === "success") {
                localStorage.setItem("jwt-token", data.token);
                setUsername("");
                setPassword("");
              } else {
                alert(data.message);
              }
            });
    };

    return (
        <section id="login-signup-cotntainer" className="relative max-w-[600px] min-w-[350px] p-3 bg-light-grayscale-tertiary text-text-primary rounded">
            <h1 className="flex auto m-6 justify-center text-2xl font-bold">Log In or Sign Up</h1>
            <form className="relative grid justify-items-center">
                <div className="relative mx-8 p-3 inline-block space-y-8 grid justify-items-end">
                    <div className="relative flex auto">
                        <label htmlFor="username" className="relative pr-3"><CircumIcon name="user" color="#344e41" className="relative m-8 p-3"/></label>
                        <input 
                            type="text"
                            id="username"
                            placeholder="Username"
                            autoComplete="off"
                            // ref={userRef}
                            value={username}
                            required
                            onChange={(e) => setUsername(e.target.value)}
                            className="p-1 text-text-secondary border-grayscale-primary"
                        />
                    </div>
                    <div className="relative flex auto">
                        <label htmlFor="password" className="relative pr-3"><CircumIcon name="lock" color="#344e41" className="relative m-8 p-3"/></label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            autoComplete="off"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-1 text-text-secondary"
                        />
                    </div>
                </div>
                <section id="submit-container" className="relative flex">
                    <div className="relative m-3 flex auto justify-items-center justify-items-stretch">
                        <button id="signup-btn" onClick={onSignUp} className="grid w-[120px] m-3 p-3 bg-primary rounded justify-center text-text-white">Sign Up</button>
                        <button id="login-btn" onClick={onLogIn} className="grid w-[120px] m-3 p-3 bg-secondary rounded justify-center text-text-primary">Log In</button>
                    </div>
                    <p>{error}</p>
                </section>
            </form>
        </section>
    );
};

export default LoginForm;
