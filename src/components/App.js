import React,{useState,useEffect,useRef} from 'react'
import '../styles/App.css';
const App = () => {
  const [email,setemail]=useState('')
  const [password,setPassward]=useState('')
  const emailRef=useRef(null)
  const passwordRef=useRef(null)

  useEffect(()=>{
    emailRef.current.focus();
  },[])
  const handleEmail=(e)=>{
    setemail(e.target.value)
  }
  const handlePass=(e)=>{
    setPassward(e.target.value)
  }
  const handleSubmit=()=>{
    if(!email.trim()){
      emailRef.current.focus();
    }
    else if(!password.trim()){
      passwordRef.current.focus();
    }
  }
  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={email} ref={emailRef} onChange={handleEmail}/><br/>
      Password
      <input id="inputPassword" type="text" value={password} ref={passwordRef} onChange={handlePass}/><br/>
      <button id="submitButton" onClick={handleSubmit}>Submit</button><br/>
      <p id="emailText">Your Email : {email}</p>
      <p id ="passwordText">Your Password : {password}</p>
      
    </div>
  )
}


export default App;
