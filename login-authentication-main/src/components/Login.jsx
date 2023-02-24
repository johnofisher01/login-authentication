import React from 'react'
import { useRef, useState, useEffect } from 'react'

const Login = () => {
    const userRef = useRef(null)
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [pwd , setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [sucess, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])


    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg": "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="" ref={userRef} autoComplete="off" onChange={(e)=> setUser(e.target.value)} value={user} required/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="" ref={userRef} autoComplete="off" onChange={(e)=> setPassword(e.target.value)} value={pwd} required/>
            </form>
        </section>
    )
}

export default Login
