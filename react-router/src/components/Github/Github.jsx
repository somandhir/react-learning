import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/somandhir')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data);
    //     })
    // } , []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex justify-center">
        <div className="flex flex-col ">
      Github follower: {data.followers}
      <img  src={data.avatar_url} alt="" />
      </div>
    </div>
  );
}

export default Github;

export const githubInfo = async()=>{
    return (await fetch('https://api.github.com/users/somandhir')).json();
        
}
