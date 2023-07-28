import { useState } from 'react'

import axios from "axios"

function App() {
  const [data, setData] = useState({
    userName:"",
    password:""
  })

  function HandleData(e) {
    e.preventDefault();
    
   axios.post("http://localhost:8000/login",data,{
    headers:{
      "Content-Type":"application/json"
    }
   }).then(res=>{
    let access_token = res.data.accessToken
    console.log(access_token)
   })
      .catch(err=> console.log(err))
  
  }



  return (
    <>
      <div>
        <form onSubmit={(e)=>HandleData(e)}>
            <label htmlFor="email"> Email</label>
            <input type="Email" value={data.userName} id='email' onChange={(e)=>{
              setData({
                ...data,
                userName:e.target.value
              })
            }} />
            <br />
            <label htmlFor="password"> password</label>
            <input type="password" value={data.password} id='password' onChange={(e)=>{
              setData({
                ...data,
                password:e.target.value
              })
            }}/>
            <br />
            <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default App
