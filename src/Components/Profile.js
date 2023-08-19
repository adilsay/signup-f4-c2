import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [logout, setLogout] = useState("");

    const navigate = useNavigate();
    const userInfo = (localStorage.getItem('userData'));
    const user = JSON.parse(userInfo);
    console.log(user);

    
        function logoutUser(){
            setLogout("You have successfully logged out 🙋‍♂️");
           setTimeout(()=>{
            navigate('/');
            localStorage.removeItem('userData');
           },1000)
           
        }
    

  return (
    <div className='profile'>
        <div className='profileContainer'>
        {
            <ul>
                <div><li>ID :- {user.id}</li>
                <li>First Name :- {user.firstName}</li>
                <li>Last Name :- {user.lastName}</li>
                <li>Username :- {user.userName}</li>
                <li>Email :- {user.email}</li>
                <li>Gender :- {user.gender}</li></div>
                <img className='userImage' src={user.img} alt='image' />
            </ul>
        }
        <button type='button' onClick={logoutUser}>Logout</button>
        {setLogout && <h4 className='logoutMsg'>{logout}</h4>}   
    </div>
        
    </div>
  )
}

export default Profile