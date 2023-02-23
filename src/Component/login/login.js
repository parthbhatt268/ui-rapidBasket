import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {connect} from "react-redux"
import {
    postLogin
} from "../../Store/AsyncThunk"

const Login = (props) => {

    const navigate = useNavigate();
    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleLogin = () => {
        //navigate("/Home")
        console.log(user)
        props.postLogin(user)
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            console.log("aya",res)
            alert(res.data.message)
            setLoginUser(res.data.user)
         
        })
    }

    return (
        <>
        {/* <div class="container"></div> */}
        <div className="login_wrap">
        <div className="LoginContainer">
            <h1 style={{ color:"white"}}>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={handleLogin}>Login</div>
            <div style={{ color:"white"}}>or</div>
            <div className="button" onClick={() => navigate("/Register")}>Register</div>
        </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    postLogin,
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);


 