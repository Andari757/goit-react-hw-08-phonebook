import { useState, } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login as loginAction } from 'redux/auth/auth-operations';
import s from "./style.module.css"

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const isEmailValid = email.match(/[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+/i);
    const isPasswordValid = password.length >= 6;

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { email, password };
        dispatch(loginAction(payload));
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <input className={s.input}
                value={email}
                placeholder="Email"
                type="text"
                style={{ borderColor: isEmailValid ? 'green' : 'red' }}
                onChange={e => setEmail(e.target.value)}
            />
            <input className={s.input}
                value={password}
                placeholder="Password"
                type="password"
                style={{ borderColor: isPasswordValid ? 'green' : 'red' }}
                onChange={e => setPassword(e.target.value)}
            />
            <button className={s.button} type="submit" disabled={!isEmailValid || !isPasswordValid}>
                Login
            </button>
            <button className={s.buttonLink}>
                <Link className={s.link} to="/register">
                    Register?
                </Link>
            </button>
        </form>

    )
};
