import React from 'react'
import { useParams } from 'react-router';

function User() {
    const {id} = useParams();
  return (
    <div className='text-center text-4xl bg-amber-400 m-8 p-8'  >User: {id} </div>
  )
}

export default User