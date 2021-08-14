import React, { useState } from 'react'
import '../login/login.css'
import axios from 'axios';
import {useHistory} from "react-router-dom";

const Login = ({setLoginUser}) => {

    const history = useHistory();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        });
    }

    const login = () =>{
        axios.post("http://localhost:9002/login",user)
        .then(res => {
            alert(res.data.message);
            setLoginUser(res.data.user);
            history.push("/");
        });
    }

        return (
            <div className="login">
                {console.log(user)}
                <h1>Login</h1>
                <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter Your Email"/>
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" />
                <div className="button" onClick={login}>Login</div>
                <div>Or</div>
                <div className="button" onClick={() => history.push("/register")}>Rgister</div>
            </div>
        );
    }

export default Login