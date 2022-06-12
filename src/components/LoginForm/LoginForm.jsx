import { useState, } from 'react';
import { useNavigate } from "react-router-dom";

import s from "./style.module.css"

export default function LoginForm({ onSubmit }) {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
    });


    const isEmailValid = data.email.match(/[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+/i);
    const isPasswordValid = data.password.length >= 6;

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = data;
        onSubmit({ email, password })

    };
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setData(prevForm => ({
            ...prevForm,
            [name]: value,
        }));
    };
    const handleClick = () => {
        navigate("/register")
    }
    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <button type='button' onClick={handleClick} className={s.buttonLink}>

                Register?

            </button>
            <input className={s.input}
                name="email"
                value={data.email}
                placeholder="Email"
                type="text"
                style={{ borderColor: isEmailValid ? 'green' : 'red' }}
                onChange={handleChange}
            />
            <input className={s.input}
                name="password"
                value={data.password}
                placeholder="Password"
                type="password"
                style={{ borderColor: isPasswordValid ? 'green' : 'red' }}
                onChange={handleChange}
            />
            <button className={s.button} type="submit" disabled={!isEmailValid || !isPasswordValid}>
                Login
            </button>

        </form>

    )
};
