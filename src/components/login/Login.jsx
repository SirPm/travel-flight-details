import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import './login.scss'

const Login = () => {
    const [ loginDetails, setLoginDetails ] = useState({
        user: '',
        password: ''
    });

    const history = useHistory();

    /* useEffect(() => {
        console.log(loginDetails);
    }, [loginDetails]) */

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails({
            ...loginDetails,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(loginDetails.user.toLowerCase() === 'demo' && loginDetails.password === 'demo' ) {
            Swal.fire('Congrats', '', 'success');
            history.push('/dashboard')
        } else if ( loginDetails.user.toLowerCase() !== 'demo' ) {
            Swal.fire('Invalid User Name!', '', 'error');
        } else if (loginDetails.password !== 'demo') {
            Swal.fire('Incorrect Password!', '', 'error');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit } className="login-form">
            <h1>Welcome! Please Enter Your Details Below To Login In To Your Dashboard</h1>
            <div className="input-div">
                <label htmlFor="user" className="input-label">User</label>
                <input id="user" 
                    onChange={ handleChange } 
                    value={ loginDetails.user } 
                    name="user"
                    className="input-field" required type="text" 
                />
            </div>
            <div className="input-div">
                <label htmlFor="pw" className="input-label">Password</label>
                <input id="pw" 
                    onChange={ handleChange }
                    value={ loginDetails.password }
                    name="password"
                    className="input-field" required type="password" 
                />
            </div>
            <input type="submit" value="Login"/>
        </form>
    )
}

export default Login
