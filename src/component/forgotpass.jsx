import React, { useState } from 'react';

const ForgotPass = () => {
  // State to hold the email entered by the user
  const [email, setEmail] = useState('');

  // Function to handle the form submission for password reset
  const handleReset = (e) => {
    e.preventDefault(); 
    // Handle the reset password logic (e.g., call an API)
    console.log({ email }); // Log the email for debugging purposes
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card-body shadow" style={{ borderRadius: '20px' }}>
            <div className="text-center mb-4 p-3" style={{ backgroundColor: '#ED3636' }}>
              <h2 className="text-white">Reset Password</h2>
            </div>
            <form onSubmit={handleReset} className="p-4">
              {/* Email input field */}
              <div className="form-group mb-3">
                <label style={{ color: '#6B779A' }}>Email</label>
                <input
                  type="email" // Input type for email
                  className="form-control"
                  placeholder='test@test.com' // Placeholder for email input
                  style={{ backgroundColor: '#6B779A0D' }} // Background color for the input
                  value={email} // Value of the input bound to state
                  onChange={(e) => setEmail(e.target.value)} // Update state on input change
                  required // Make this field required for form submission
                />
              </div>
              {/* Submit button to reset password */}
              <button
                type="submit" 
                className="btn w-100 mb-3 rounded-4" 
                style={{
                  width: '300px', 
                  height: '60px',  
                  marginTop: '100px', 
                  backgroundColor: '#ED3636', 
                  color: 'white',
                  fontFamily: 'Poppins',
                  fontSize: '18px', 
                  fontWeight: '600', 
                  lineHeight: '27px',  
                  textAlign: 'center', 
                  letterSpacing: '-0.3px',
                }}
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
