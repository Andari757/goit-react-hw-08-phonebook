import RegisterForm from "components/RegisterForm/RegisterForm";
import { useDispatch } from "react-redux";
import { signup } from "redux/auth/auth-operations";

export default function RegisterPage() {
    const dispatch = useDispatch()
    const onSubmit = (payload) => dispatch(signup(payload));

    return (
        <RegisterForm onSubmit={onSubmit} />
    )
};
