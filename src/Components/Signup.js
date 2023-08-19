import React ,{useState} from "react";

import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [user , setUser] = useState({
        username : "",
        password : ""
    })
    const [token , setToken] = useState("");
    const [error , setError] = useState(null);
    const [success , setSuccess] = useState(null);
    
    function addUser(e) {
        e.preventDefault();
        
        if(!user.username || !user.password){
            setError("Please fill all the fields!");
            setSuccess(null);
            return;
        }

        axios.post('https://dummyjson.com/auth/login' , 
        {
            username : user.username,
            password : user.password
        },
        {
            headers: { 'Content-Type': 'application/json' }
        }
        )
        .then((response) => {
            console.log(response.data);
            
            const userData = {
                id: response.data.id,
                firstName : response.data.firstName,
                lastName : response.data.lastName,
                userName : response.data.username,
                email : response.data.email,
                gender : response.data.gender,
                token : response.data.token,
                img : response.data.image,
            }
            setToken(response.data.token);
            localStorage.setItem("userData", JSON.stringify(userData));
            localStorage.setItem("token", response.data.token);
            setSuccess(`Signin successful 😀`)
            setTimeout(() => {
              setError(null);
              navigate('/profile')
            }, 1000);
            
          
           
        })
        .catch((error) => {
            setError(`Invalid credentials! 🥺`);
            setSuccess(null);
        })
        
    }
    


  return (
    <div className="signup">
      <div className="container">
        <h3>Welcome back!👋</h3>
        <h1>Sign in to your account</h1>
        <br />
        <form onSubmit={addUser}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" onChange={(e)=>{setUser({...user , username : e.target.value})}} />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={(e)=>{setUser({...user , password : e.target.value})}} />

          <button className="submitBtn" type="submit">Continue</button>
        </form>
        {setError && <h4 className="error">{error}</h4>}
        {setSuccess && <h4 className="success">{success}</h4>}
        <h4>Forget your password?</h4>
      </div>
      <h4 id="secondH4">Don't have an account? <span> Sign up </span></h4>
    </div>
  );
};

export default Signup;
