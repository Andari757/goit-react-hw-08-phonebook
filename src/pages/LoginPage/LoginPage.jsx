import { useState, } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { authSlice } from 'redux/auth/auth-slice';
import { login as loginAction } from 'redux/auth/auth-operations';

export default function LoginPage() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
     const isEmailValid = email.match(/[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+/i);
    const isPasswordValid = password.length >= 6;
    const dispatch = useDispatch();
   const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { email, password };
        dispatch(loginAction(payload));
    };
    return (
        <form onSubmit={handleSubmit}> <Link to="/register">
                Register?
            </Link>                        
            <input
                value={email}
                placeholder="Email"
                type="text"
                style={{ borderColor: isEmailValid ? 'green' : 'red'}}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                value={password}
                placeholder="Password"
                type="password"
                style={{ borderColor: isPasswordValid ? 'green' : 'red'}}
                onChange={e => setPassword(e.target.value)}
            />
            <input type="submit"/>
        </form>
    
    )
};
