import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
export default function SignUp() {

let [userData,setUserData] = useState({});
let [loading,setLoading] = useState(false);
let [errmess,setErrmess] = useState('');
const navigator = useNavigate();
  const handleChange = (e)=>{

    setUserData(
      {...userData, [ e.target.id ]: e.target.value}
    )
  };


  const sendData = async (e) => {
    e.preventDefault();
    setErrmess('')
console.log("user data :: ",userData)
setLoading(true);
   try {
    const res = await fetch('/api/signup', {
      body: JSON.stringify({userData}),
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      }
    })

    const data = await res.json();
    console.log("res data :: ",res);
    console.log(data);
    setLoading(false);
    if(data.success) navigator('/login');
    setErrmess(data.errMessage || data.message);
   } catch (error) {
    console.log(error)
   }
   setLoading(false);
  }


  return (
    <section className='flex justify-center bg-slate-500 p-5'>
      <div>
        <h1>Sign Up!</h1>
 
          <form className='flex flex-col gap-5'>
            <input type="text" id='userName' className='' placeholder='User Name'onChange={handleChange}/>
            <input type="text" id='userEmail' className='' placeholder='Email'onChange={handleChange} />
            <input type="text" id='userPassword' className='' placeholder='Password' onChange={handleChange} />
            <button disabled={loading} className={ loading ? 'bg-blue-400 rounded-md p-3' : 'bg-red-500'} onClick={sendData}>Signup</button>
            {
              errmess != '' && errmess 
            }
          </form>
      </div>
    </section>
  )
}
