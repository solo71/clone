import React from "react";

const BackendErrorMessage = ({ backendError }) => {
    const err = Object.keys(backendError).map(name=>{
        const messages=backendError[name].join(' ')
        return `${name} ${messages}`
    })
    return (
        <ul className="error-messages">
            {err.map(err=>(
                <li key={err}>{err}</li>
            ))}
        </ul>
    )
}

export default BackendErrorMessage