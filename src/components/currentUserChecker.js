import React, { useContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import {CurrentUserContext} from "../contexts/currentUser"

const CurrentUserChecker = ({children}) =>{
    const [{response}, doFetch  ] = useFetch('/user')
    const [, setCurrentUserState] = useContext(CurrentUserContext)
    useEffect(()=>{
        doFetch()
        setCurrentUserState(state =>({
            ...state,
            isLoading:true
        }))
    },[])
    return children
}

export default CurrentUserChecker