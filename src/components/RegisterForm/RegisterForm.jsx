import { useState, } from 'react';
import { Link } from "react-router-dom";
import s from "./style.module.css"


export default function RegisterForm({ onSubmit }) {
    const [data, setData] = useState({
        email: "",
        password: "",
        name: ""
    });

    const isEmailValid = data.email.match(/[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+/i);
    const isPasswordValid = data.password.length >= 6;
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setData(prevForm => ({
            ...prevForm,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, name } = data;
        onSubmit({ email, password, name })
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <button type='button' className={s.buttonLink}>
                <Link className={s.link} to="/login">
                    Login?
                </Link>
            </button>
            <input
                value={data.name}
                name="name"
                placeholder="Name"
                autoComplete="none"
                className={s.input}
                type="text"
                onChange={handleChange}
            />
            <input
                value={data.email}
                name="email"
                placeholder="Email"
                autoComplete="none"
                className={s.input}
                type="text"
                style={{ borderColor: isEmailValid ? 'green' : 'red' }}
                onChange={handleChange}
            />
            <input
                value={data.password}
                name="password"
                className={s.input}
                autoComplete="new-password"
                placeholder="Password"
                type="password"
                style={{ borderColor: isPasswordValid ? 'green' : 'red' }}
                onChange={handleChange}
            />
            <button className={s.button} type="submit" disabled={!isEmailValid || !isPasswordValid || data.name.length < 1}>
                Register
            </button>

        </form>
    )
};
