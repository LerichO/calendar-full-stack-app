import React, { useState } from 'react';
import axios from 'axios';

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
        <div className="relative m-8 p-3 bg-secondary text-text-primary">
            <form className="relative grid justify-items-center">
                <div className="relative m-8 p-3 inline-block space-y-8 grid justify-items-end">
                    <div className="">
                        <label>
                            <b>Email: </b>
                        </label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>
                            <b>Username: </b>
                        </label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label>
                            <b>Password: </b>
                        </label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <div id="submit-container">
                            <div id="signup" onClick={onSignUp}>Sign Up</div>
                            <div id="login" onClick={onLogIn}>Log In</div>
                            <p>{error}</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
