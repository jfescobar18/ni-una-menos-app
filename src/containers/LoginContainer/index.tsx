// React
import { useNavigate } from "react-router-dom"
// Components and Containers
import LoginForm from "../../components/LoginForm"

const LoginContainer = () => {
    const navigate = useNavigate()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate("/Dashboard")
    }
    return (
        <>
            <LoginForm onSubmit={onSubmit} />
        </>
    )
}

export default LoginContainer
