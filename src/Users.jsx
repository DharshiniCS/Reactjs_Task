import React from 'react'
import { useSearchParams } from 'react-router-dom';

export default function Users() {
     const users = [
    { id: 1, name: "Dharshini", email: "dharshini@gmail.com", city: "Madurai", role: "Developer" },
    { id: 2, name: "Priya", email: "priya@gmail.com", city: "Chennai", role: "Designer" },
    { id: 3, name: "Rahul", email: "rahul@gmail.com", city: "Coimbatore", role: "Tester" },
    { id: 4, name: "Arun", email: "arun@gmail.com", city: "Salem", role: "Developer" },
    { id: 5, name: "Karthik", email: "karthik@gmail.com", city: "Trichy", role: "Manager" },
    { id: 6, name: "Meena", email: "meena@gmail.com", city: "Madurai", role: "HR" },
    { id: 7, name: "Siva", email: "siva@gmail.com", city: "Erode", role: "Developer" },
    { id: 8, name: "Anu", email: "anu@gmail.com", city: "Chennai", role: "Tester" },
    { id: 9, name: "Vijay", email: "vijay@gmail.com", city: "Salem", role: "Developer" },
    { id: 10, name: "Deepa", email: "deepa@gmail.com", city: "Madurai", role: "Designer" },
    { id: 11, name: "Ajay", email: "ajay@gmail.com", city: "Trichy", role: "HR" },
    { id: 12, name: "Kavi", email: "kavi@gmail.com", city: "Erode", role: "Manager" },
    { id: 13, name: "Nisha", email: "nisha@gmail.com", city: "Chennai", role: "Tester" },
    { id: 14, name: "Ravi", email: "ravi@gmail.com", city: "Madurai", role: "Developer" },
    { id: 15, name: "John", email: "john@gmail.com", city: "Salem", role: "Designer" },
    { id: 16, name: "Divya", email: "divya@gmail.com", city: "Trichy", role: "HR" },
    { id: 17, name: "Hari", email: "hari@gmail.com", city: "Erode", role: "Developer" },
    { id: 18, name: "Keerthi", email: "keerthi@gmail.com", city: "Chennai", role: "Tester" },
    { id: 19, name: "Manoj", email: "manoj@gmail.com", city: "Madurai", role: "Manager" },
    { id: 20, name: "Sneha", email: "sneha@gmail.com", city: "Coimbatore", role: "Developer" }
  ];
  const [searchParams,setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") ) || 1;
  const recordsPerPage = 5;
  const start = (page-1)* recordsPerPage;
  const end = start + recordsPerPage;
  const currentUsers = users.slice(start,end);
  const total = Math.ceil(users.length/recordsPerPage);
   const handlePrev = () => {
    if (page > 1) {
      setSearchParams({ page: page - 1 });
    }
  };

  const handleNext = () => {
    if (page < total) {
      setSearchParams({ page: page + 1 });
    }
  };


  return (
    <div className="container">
     <h2>User Cards Pagination</h2>
     <div className="card-container">
        {currentUsers.map((user)=>{
            return(
             <div className="card" key={user.id}>
            <h3>{user.name}</h3>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>City:</strong> {user.city}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
            )
        })}
     </div>
       <div className="pagination">
        <button onClick={handlePrev} disabled={page === 1}>
          Previous
        </button>

        <span>Page {page}</span>

        <button onClick={handleNext} disabled={page === total}>
          Next
        </button>
      </div>
      
    </div>
  )
}
