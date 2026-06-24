import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
export default function UserList() {
    const[users,setUsers] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res)=>(res.json()))
        .then((data)=>(setUsers(data)))
    },[])
  return (
    <div className="container">
      <h1>User List</h1>
      {users.map((user)=>{
        <div className="user-card" key={user.id}>
            <Link to={`/user/${user.id}`}>
                {user.name}
            </Link>
        </div>
      })}
      
    </div>
  )
}
