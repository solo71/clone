import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Authentification = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleSubmit = event => {
        event.preventDefault()
        setIsSubmiting(true)
    }

    useEffect(() => {
        if (!isSubmiting) {
            return
        }
        axios('https://conduit.productionready.io/api/users/login', {
            method: 'POST',
            data: {
                user: {
                    email: 'wfwefwef@bk.ru',
                    password: '12345678'
                }
            }
        })
            .then(res => { 
                console.log('success', res) 
                setIsSubmiting(false)
            })
            .catch(error => { 
                console.log('error', error) 
                setIsSubmiting(false)
            })
    }
    )
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
                                <button className="btn btn-lg btn-primary pull-xs-right" type="submit" disabled={isSubmiting}>
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