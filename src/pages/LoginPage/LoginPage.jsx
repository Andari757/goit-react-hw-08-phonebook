import LoginForm from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { login as loginAction } from 'redux/auth/auth-operations';
export default function LoginPage() {
    const dispatch = useDispatch()
    const onSubmit = (payload) => dispatch(loginAction(payload));
    return (
        <LoginForm onSubmit={onSubmit} />
    )
};
