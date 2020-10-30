import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../Login/Login'

export default function MainPage() {
    const { isAuthenticated } = useSelector( state => state.auth)
    return (
        <div>
            {
                isAuthenticated ?
                <Login />:
                <h1>Hello I am </h1>
            }
            
        </div>
    )
}
