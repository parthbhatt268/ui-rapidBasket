import React, { useState } from "react"
import "./register.css"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import {
    postRegister
} from "../../Store/AsyncThunk/userAsync"



const Register = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        passwordConfirm: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, passwordConfirm } = user
        console.log(user)
        if( name && email && password && (password === passwordConfirm)){
            dispatch(postRegister(user)).unwrap().then((originalPromiseResult) => {
                navigate("/Home")
              })
        } else {
            alert("invlid input")
        }
        
    }



    return (
        <div className="register_wrap">
        <div className="register">
            <h1 style={{ color:"white"}}>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="passwordConfirm" value={user.passwordConfirm} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div style={{ color:"white"}}>or</div>
            <div className="button" onClick={() => navigate("/Login")}>Login</div>
        </div>
        </div>
    )
}


export default Register;
 