import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users/somandhir")
        .then((res)=>res.json())
        .then((res)=>setData(res));
    },[]);
    // console.log(data);
    

  return (
    <div className='flex flex-col items-center' >
        <h1 className='text-center text-4xl bg-amber-400 p-8 m-5'>Github followers : {data.followers} </h1>
        <img className='h-40 w-40 m-4' src={data.avatar_url}  ></img>
    </div>
  )
}

export default Github