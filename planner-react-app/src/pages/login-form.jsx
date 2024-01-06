import React, { useState } from 'react';
import axios from 'axios';
import CircumIcon from "@klarr-agency/circum-icons/react";

const API_ROOT_URL = `http://localhost:5000`;

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onLogIn = () => {
        const user = {
            email: email,
            password: password,
        };

        console.log(user.email);

        axios.get(`${API_ROOT_URL}/users/${user.email}`, user.email);
    };

    const onSignUp = () => {
        const user = {
            email: email,
            password: password,
        };

        console.log(user.email);

        axios.post(`${API_ROOT_URL}/users/createUser`, user.email).then((res) => console.log(res));
    };

    return (
        <div className="relative max-w-[600px] min-w-[350px] p-3 bg-light-grayscale-tertiary text-text-primary rounded">
            <h1 className="flex auto m-6 justify-center text-2xl font-bold">Log In or Sign Up</h1>
            <form className="relative grid justify-items-center">
                <div className="relative m-8 mt-0 p-3 inline-block space-y-8 grid justify-items-end">
                    <div className="relative flex auto">
                        <div className="relative pr-3"><CircumIcon name="mail" color="#344e41" className="relative m-8 p-3"/></div>
                        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-1 text-text-secondary border-grayscale-primary" />
                    </div>
                    <div className="relative flex auto">
                        <div className="relative pr-3"><CircumIcon name="user" color="#344e41" className="relative m-8 p-3"/></div>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="p-1 text-text-secondary" />
                    </div>
                    <div className="relative flex auto">
                        <div className="relative pr-3"><CircumIcon name="lock" color="#344e41" className="relative m-8 p-3"/></div>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-1 text-text-secondary" />
                    </div>
                </div>
                <div id="submit-container" className="relative flex">
                    <div className="relative m-3 flex auto justify-items-center justify-items-stretch">
                        <div id="signup-btn" onClick={onSignUp} className="grid w-[120px] m-3 p-3 bg-primary rounded justify-center text-text-white">Sign Up</div>
                        <div id="login-btn" onClick={onLogIn} className="grid w-[120px] m-3 p-3 bg-secondary rounded justify-center text-text-primary">Log In</div>
                    </div>
                    <p>{error}</p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
