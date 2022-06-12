import { useState, } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signup as signupAction } from 'redux/auth/auth-operations';
import s from "./style.module.css"


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
        <form className={s.form} onSubmit={handleSubmit}>
            <input
                value={name}
                placeholder="Name"
                autoComplete="none"
                className={s.input}
                type="text"
                onChange={e => setName(e.target.value)}
            />
            <input
                value={email}
                placeholder="Email"
                autoComplete="none"
                className={s.input}
                type="text"
                style={{ borderColor: isEmailValid ? 'green' : 'red' }}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                value={password}
                className={s.input}
                autoComplete="new-password"
                placeholder="Password"
                type="password"
                style={{ borderColor: isPasswordValid ? 'green' : 'red' }}
                onChange={e => setPassword(e.target.value)}
            />
            <button className={s.button} type="submit" disabled={!isEmailValid || !isPasswordValid || name.length < 1}>
                Register
            </button>
            <button className={s.buttonLink}>
                <Link className={s.link} to="/login">
                    Login?
                </Link>
            </button>
        </form>
    )
};
