import React, { useContext, useState } from 'react'
import "./LogIn.css"
import logo from "../../../images/logo.png"
import fb from "../../../images/fb.webp"
import { Link } from 'react-router-dom'
import { ContextData } from '../../../App'

function LogIn() {
    const [loginSuccess,setLoginSuccess] = useState(false)
    const [show, setShow] = useState(false)
    const [value, setValue] = useState("")
    const [valueName, setValueName] = useState("")
    const {login} = useContext(ContextData)

console.log(login.length, "salammm");


    const loginPage = () => {
        for (let i = 0; i < login.length; i++) {
            console.log(valueName);
            if (valueName == login[i].userName && value == login[i].password ) {
                setLoginSuccess(true)
                alert('hesaba giris olunur')
                return
            }
        }
        return alert('sifre ve ya parol sehvdir')
    }


    const showInput = () => {
        setShow(!show)
    }
    return (
        <div style={{height:"110vh", width:"100%"}}>
            <div className='login'>
                <div className="formLoginss">
                    <div className="logoLogin">
                        <div className="logoContainer">
                            <div className="logoIns">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='loginInput'>
                        <form action="">
                            <input className='input1' value={valueName} onChange={(e) => setValueName(e.target.value)} type="text" placeholder='' />
                            <label className='label1'  htmlFor="">Phone number, username, or email</label>
                            <input className='input2' value={value} onChange={(e) => setValue(e.target.value)} type={show ? "text" : "password"} placeholder='' />
                            <label className='label2' htmlFor="">Password</label>
                            <p style={{ display: value == "" && "none" }} onClick={showInput} className='show'>{show ? "Hide" : "Show"}</p>
                        </form>
                    </div>
                    <div className="loginButton">
                        <button onClick={loginPage} style={{ opacity: valueName && value.length > 5 ? "1" : "0.5"}}>Log in</button>
                    </div>
                    <div className='loginFlexOr'>
                        <div className='xettLogin'></div>
                        <div className='orTextLogin'>OR</div>
                        <div className='xettLogin'></div>
                    </div>
                    <div className="facebookLogin">
                        <div className="loginFbLogo"><img src={fb} /></div>
                        <div className="loginFbText">Log in with Facebook</div>
                    </div>
                    <div className='forget'>Forget password?</div>
                    <div className="signupEq"><p>Don't have an account? <Link to="/login">Sign up</Link></p></div>
                    <div className="buttons">
                        <div><p>Get the app.</p></div>
                        <div className='gogMicFlexLogin'>
                            <div className="google"><img alt="Get it on Google Play" class="_aa5q" src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" /></div>
                            <div className="microsoft"><img alt="Get it from Microsoft" class="_aa5q" src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" /></div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="gooterLogin">
                <ul>
                    <li>Meta</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Help</li>
                    <li>API</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Terms</li>
                    <li>Locations</li>
                    <li>Instagram Lite</li>
                    <li>Threads</li>
                    <li>Meta Verified</li>
                </ul>
                <p className='pppp'>English © 2023 Instagram from Meta</p>
            </div>
        </div>
    )
}

export default LogIn