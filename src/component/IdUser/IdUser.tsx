import  { useEffect, useState } from 'react'
import './IdUser.css'
function IdUser() {
     const [userName, setUserName] = useState('');
      const [userImage, setUserImage] = useState('');
    
     useEffect
     (() => {
      const user_name = localStorage.getItem('user_name') || '';
      const image = localStorage.getItem('user_image') || '';
      
      setUserName(`${user_name}`); 
      setUserImage(image);
    }, []);
  return (
       <div>
         <img
          src={userImage}
          alt="User-Img"
          className='img-user rounded-circle'
        />
        <p className="fw-bold user">{userName}</p>
       </div>
  )
}

export default IdUser