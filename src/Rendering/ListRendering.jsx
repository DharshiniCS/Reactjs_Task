import React from 'react'

export default function ListRendering() {
    const employees = [
    {
      name: "Dharshini Priya",
      age: 21,
      city: "Chennai",
      role: "Frontend Developer",
      contact: "9876543210",
    },
    {
      name: "Priya",
      age: 22,
      city: "Coimbatore",
      role: "UI Designer",
      contact: "9876543211",
    },
    {
      name: "Naveen",
      age: 23,
      city: "Madurai",
      role: "Backend Developer",
      contact: "9876543212",
    },
    {
      name: "Karthik",
      age: 24,
      city: "Trichy",
      role: "Full Stack Developer",
      contact: "9876543213",
    },
    {
      name: "Divya",
      age: 22,
      city: "Salem",
      role: "Software Tester",
      contact: "9876543214",
    },
  ];
  return (
    <div>
      <div className="container">
      <h2>Employee Details</h2><br />

        <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Role</th>
            <th>Contact</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.city}</td>
              <td>{emp.role}</td>
              <td>{emp.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
    </div>
  )
}
