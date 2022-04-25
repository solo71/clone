import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from "../../contexts/currentUser";
import BackendErrorMessage from "./components/BackendErrorMessage";

const Authentification = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false)
    const location = useLocation()
    const isLogin = location.pathname === '/login'
    const apiUrl = isLogin ? 'users/login' : 'users'
    const pageTitle = isLogin ? 'Sign in' : 'Sign up'
    const descriptionLink = isLogin ? '/register' : '/login'
    const descriptionText = isLogin ? 'Need an account?' : 'Have an account?'
    const [{ isLoading, response, error}, doFetch] = useFetch(apiUrl)
    let navigate = useNavigate();
    const [, setToken] = useLocalStorage('token')
    const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext)

     const handleSubmit = event => {
        event.preventDefault()
        const user = isLogin ? { email, password } : { email, password, username }
        doFetch(
            {
                method: 'POST',
                data: {
                    user
                }
            }
        )
    }

    useEffect(() => {
        if (!response) {
            return
        }
        setIsSuccessfulSubmit(true)
        setToken(response.user.token)
        setCurrentUserState(state => ({
            ...state,
            isLoading: false,
            isLoggedIn: true,
            currentUser: response.user
            })) 
}, [response, setToken, setCurrentUserState])

if (isSuccessfulSubmit) {
    navigate('/')
}
return (
    <div className="auth-page">
        <div className="container page">
            <div className="row">
                <div className="col-md-6 offset-md-3 col-sx-12">
                    <h1 className="text-xs-center">{pageTitle}</h1>
                    <p className="text-xs-center">
                        <Link to={descriptionLink}>{descriptionText}</Link>
                    </p>
                    <form onSubmit={handleSubmit}>
                        {error && <BackendErrorMessage backendError={error.errors} />}
                        <fieldset>
                            {!isLogin && (
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                </fieldset>
                            )}
                            <fieldset className="form-group">
                                <input
                                    type='email'
                                    className="form-control form-control-lg"
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </fieldset>
                            <fieldset className="form-group">
                                <input
                                    type='password'
                                    className="form-control form-control-lg"
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </fieldset>
                            <button className="btn btn-lg btn-primary pull-xs-right" type="submit" disabled={isLoading}>
                                {pageTitle}
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
)
}

export default Authentification