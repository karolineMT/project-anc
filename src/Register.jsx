import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div>
      <form action="#non" method="post" className="fcorn-register container">
        <p className="register-info">ADD CLIENT.</p>
        <p className="row">
          <p className="col-md-6">
            <label>First Name</label>
            <input type="text" placeholder="First Name" required />
          </p>
          <p className="col-md-6">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" required />
          </p>
        </p>
        <p className="row">
          <p className="col-md-12">
            <label>Physical Address</label>
            <input type="email" placeholder="Physical Address" required />
          </p>
        </p>
        <p className="row">
          <p className="col-md-4">
            <label>Date of Birth</label>
            <input type="text" placeholder="Date (dd)" required />
          </p>
          <p className="col-md-4">
            <label>Phone Number</label>
            <input type="text" placeholder="Phone" required />
          </p>
          <p className="col-md-4">
            <label>Next of Kin</label>
            <input type="text" placeholder="Next of Kin" required />
          </p>
        </p>
        <p className="row">
          <p className="col-md-12">
            <input type="submit" value="Register Now" className="register-submit" />
          </p>
        </p>
      </form>
    </div>
  );
};

export default Register;
