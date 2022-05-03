import React from 'react';
import { useState } from 'react';
import './Loginpage.css';

function Loginpage({setLogin}) {
    const[username,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [isLogin,setIsLogIn]=useState('')
    const onclickhandler=()=>{
        
        if(username===''){
            alert("plaese enter username")

        }
        else if(password===''){
            alert("please enter password")
        }
        else if(username==='rahul'&&password==='11122251'){
            setIsLogIn("log in succsesfully")
            setTimeout(() => {
                // const auth={
                //     isLogedin:true,
                //     expiry:new Date().getTime
                // }
                window.localStorage.setItem("auth","true")
                setLogin(false) 
            },200);
            
        }
        else{
            setIsLogIn("incorrect username or password")
        }
    }
    const usernameChanger=(e)=>{
        let enteredName=e.target.value
        setUserName(enteredName.toLowerCase())
    }
    
    return (
        <div className='App_header'>
            
            <div className='login_container'>
                {/* <h4 className='cancel' onClick={()=>setLogin(false)}>X</h4>    */}
                {/* <h4>log in</h4> */}
                <label>Username:</label><input value={username} onChange={(e)=>usernameChanger(e)} type='email' required placeholder='enter your username'></input><br/>
                <label>Password:</label><input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' required placeholder='enter your password'></input><br/>
                <button onClick={onclickhandler}>login</button>
                {isLogin!==''?<h4>{isLogin}</h4>:null}
            </div>
        </div>
    );
}

export default Loginpage;