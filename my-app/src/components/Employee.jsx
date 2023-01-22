import React from 'react'
import Navbar from './Navbar'


const Employee = () => {
  return (
    <>
    <Navbar/>


    <div>
      <h5 class="text-center">Employee Information</h5>

    <div className="input-group">
      <span className="input-group-text">Employee name</span>
      <input type="text" aria-label="First name" class="form-control" placeholder="First Name"/>
      <input type="text" aria-label="Last name" class="form-control" placeholder="Last Name"/>
      
    </div>

    <div className="input-group">
      <span className="input-group-text">Employee Designation</span>
      <input type="text" aria-label="First name" class="form-control"/>
      
    </div>

    <div className="input-group">
      <span className="input-group-text">Employee Location</span>
      <input type="text" aria-label="First name" class="form-control"/>
     
    </div>


    <div className="input-group">
      <span className="input-group-text">Employee Salary</span>
      <input type="text" aria-label="First name" class="form-control"/>
      
    </div>

    <div className="d-grid gap-2 d-md-block">
  
        <button className="btn btn-warning float-end" type="button">Submit</button>
    </div>



    

    </div>
    
    </>
  )
}

export default Employee