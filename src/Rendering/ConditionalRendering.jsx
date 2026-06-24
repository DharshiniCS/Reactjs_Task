import React, { useState } from 'react'

export default function ConditionalRendering() {
    const [login,setlogin] = useState(true)
  return (
    <div className="container">
      {login ?  (
        <div className="card">
          <h2>Welcome Dharshini Priya 🎉</h2><br />
          <p>You are successfully logged in.</p><br />
          <button onClick={() => setlogin(false)}>
            Logout
          </button>
        </div>
      ) : (
        <div className='card'>
            <h2>Please Login 🔒</h2><br />
            <p>You need to login to access the content.</p><br />
            <button onClick={()=>setlogin(true)}>
                Login
            </button>
        </div>
      )}
    </div>
  )
}
