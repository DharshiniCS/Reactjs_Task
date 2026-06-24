import React, { useState } from 'react'

export default function FormValidation() {
    const[form,setForm]=useState({
        FirstName : "",
        LastName : "",
        Email : "",
        PhoneNumber : "",
        Password : "",
        ConfirmPassword : "",
        DateofBirth : "",
        Address : "",
        City : "",
        Country :"",
    })

    const[error, setError] = useState("")
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) =>{
         e.preventDefault();
        if (!form.FirstName || !form.LastName || !form.Email || !form.Password
            || !form.ConfirmPassword || !form.PhoneNumber ||!form.DateofBirth ||
            !form.Address || !form.City || !form.Country
        ) {
      setError("all the fields are requited");
      return;
    }
    setError("");
    alert("successfully submited the form");
    console.log(form);
}
  return (
    <div className='container'>
    <h2>Registration Form</h2>

    <form onSubmit={handleSubmit}>
        <input type="text" 
      name='FirstName' 
      placeholder="First Name" 
      value={form.FirstName}
      onChange={handleChange}
      />
      <input type="text" 
      name='LastName'
      value={form.LastName}
      placeholder="Last Name" 
      onChange={handleChange} 
      />
      <input type="email" 
      name='Email' 
      value={form.Email}
      placeholder="Email" 
      onChange={handleChange}
      />
      <input type="text" 
      name='PhoneNumber'
      value={form.PhoneNumber}
      placeholder="Phone Number" 
      onChange={handleChange}
      />
      <input type="password" 
      name='Password' 
      value={form.Password}
      placeholder="Password" 
      onChange={handleChange}
      />
      <input type="password" 
      name='ConfirmPassword'
      value={form.ConfirmPassword}
      placeholder="Confirm Password" 
      onChange={handleChange}
      />
      <input type="date" 
      name='DateofBirth'
      value={form.DateofBirth}
      onChange={handleChange} 
      />
      <input type="text" 
      name='Address'
      value={form.Address}
      placeholder="Address" 
      onChange={handleChange}
      />
      <input type="text" 
      name='City'
      value={form.City}
      placeholder="City" 
      onChange={handleChange}
      />
      <input type="text"  
      name='Country'
      value={form.Country}
      placeholder='Country'
      onChange={handleChange}
      />
       <button type="submit">submit</button>
       {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
      
    </div>
  )
}
