import React from 'react'
import { useRef, useState, useEffect } from 'react'
// set ref useRef - focus
const Login = () => {
    const userRef = useRef(null)
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [password , setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('') 
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user,password)
        setUser('')
        setPassword('')
        setSuccess(true)
    }

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, password])


    return (


        <>
        {success ? (<section>
            <h1>You are logged in</h1>
            <br/>
            <p>
                <a href="#">Go to Home</a>
            </p>
            </section>
                     ):(

        <section>
            <p ref={errRef} className={errMsg ? "errmsg": "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="" ref={userRef} autoComplete="off" onChange={(e)=> setUser(e.target.value)} value={user} required/>
                <label htmlFor="password">Password:</label>
                <input type="password" id=""  onChange={(e)=> setPassword(e.target.value)} value={password} required/>
                <button>Sign In</button>
            </form>
        
            <p> Need an Account? <span  className="line">{/* Put Router link Here */}</span><br/><a href="#"> Sign Up?</a></p>
        </section>
                    )}
                    </>
    )
}

export default Login
// Notes
// Form  =  onSubmit default sends through the event listener, event is passed in
