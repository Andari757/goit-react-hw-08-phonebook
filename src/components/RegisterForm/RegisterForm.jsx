import { useState, } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signup as signupAction } from 'redux/auth/auth-operations';


export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const isEmailValid = email.match(/[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+/i);
    const isPasswordValid = password.length >= 6;

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { email, name, password };
        dispatch(signupAction(payload));
    };

    return (
        <form onSubmit={handleSubmit}>
            <Link to="/login">
                Login?
            </Link>
            <input
                value={name}
                placeholder="Name"
                type="text"
                onChange={e => setName(e.target.value)}
            />
            <input
                value={email}
                placeholder="Email"
                type="text"
                style={{ borderColor: isEmailValid ? 'green' : 'red' }}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                value={password}
                placeholder="Password"
                type="password"
                style={{ borderColor: isPasswordValid ? 'green' : 'red' }}
                onChange={e => setPassword(e.target.value)}
            />
            <input type="submit" />
        </form>
    )
};
