import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch, { doFetch } from "../../hooks/useFetch";

const Authentification = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [{ isLoading, response, error }, doFetch] = useFetch('/users/login')

    console.log("fff", isLoading, response, error)

    const handleSubmit = event => {
        event.preventDefault()
        doFetch(
            {
                method: 'POST',
                data: {
                    user: {
                        email: 'wfwefwef@bk.ru',
                        password: '12345678'
                    }
                }
            }
        )
    }


    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sx-12">
                        <h1 className="text-xs-center">Login</h1>
                        <p className="text-xs-center">
                            <Link to='/register'>Need an account?</Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
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
                                    Sign In
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