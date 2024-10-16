import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Signup = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
        gender: '',
    });

    // State to manage validation results
    const [validation, setValidation] = useState({
        fullName: true,
        mobile: true,
        email: true,
        password: true,
        confirmPassword: true,
        age: true,
        gender: true,
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate form inputs
    const validateForm = () => {
        const newValidation = {
            fullName: formData.fullName.length > 0,
            mobile: /^[0-9]{10}$/.test(formData.mobile),
            email: /^\S+@\S+\.\S+$/.test(formData.email),
            password: formData.password.length >= 6,
            confirmPassword: formData.password === formData.confirmPassword,
            age: formData.age > 0,
            gender: formData.gender.length > 0,
        };

        setValidation(newValidation); // Update validation state
        return Object.values(newValidation).every(Boolean); // Check if all validations passed
    };

    // Handle form submission
    const handleSignup = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (validateForm()) {
            console.log(formData); // Log form data if validation passes
        } else {
            console.log('Validation failed'); // Log failure message if validation fails
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow border-radius-20">
                        <div className="text-center mb-4 p-3" style={{ backgroundColor: '#ED3636' }}>
                            <h2 className="text-white">Sign Up</h2> {/* Title for the Signup form */}
                        </div>
                        <form onSubmit={handleSignup} className="p-4">
                            {/* Full Name Input */}
                            <div className="form-group mb-3">
                                <label style={{ color: '#6B779A' }}>Full Name</label>
                                <input
                                    type="text"
                                    className={`form-control ${validation.fullName ? '' : 'is-invalid'}`} // Apply Bootstrap validation class
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                                {!validation.fullName && <div className="invalid-feedback">Full Name is required.</div>} {/* Validation message */}
                            </div>

                            {/* Mobile Number Input */}
                            <div className="form-group mb-3">
                                <label style={{ color: '#6B779A' }}>Mobile Number</label>
                                <input
                                    type="text"
                                    className={`form-control ${validation.mobile ? '' : 'is-invalid'}`}
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                />
                                {!validation.mobile && <div className="invalid-feedback">Mobile Number must be 10 digits.</div>} {/* Validation message */}
                            </div>

                            {/* Email Input */}
                            <div className="form-group mb-3">
                                <label style={{ color: '#6B779A' }}>Email</label>
                                <input
                                    type="email"
                                    className={`form-control ${validation.email ? '' : 'is-invalid'}`}
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {!validation.email && <div className="invalid-feedback">Please enter a valid email address.</div>} {/* Validation message */}
                            </div>

                            {/* Password Input */}
                            <div className="form-group mb-3">
                                <label style={{ color: '#6B779A' }}>Password</label>
                                <input
                                    type="password"
                                    className={`form-control ${validation.password ? '' : 'is-invalid'}`}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                {!validation.password && <div className="invalid-feedback">Password must be at least 6 characters.</div>} {/* Validation message */}
                            </div>

                            {/* Confirm Password Input */}
                            <div className="form-group mb-3">
                                <label style={{ color: '#6B779A' }}>Confirm Password</label>
                                <input
                                    type="password"
                                    className={`form-control ${validation.confirmPassword ? '' : 'is-invalid'}`}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                {!validation.confirmPassword && <div className="invalid-feedback">Passwords do not match.</div>} {/* Validation message */}
                            </div>

                            {/* Age Input */}
                            <div className="form-group mb-3">
                                <label style={{ color: '#6B779A' }}>Age</label>
                                <input
                                    type="number"
                                    className={`form-control ${validation.age ? '' : 'is-invalid'}`}
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    required
                                />
                                {!validation.age && <div className="invalid-feedback">Age must be a positive number.</div>} {/* Validation message */}
                            </div>

                            {/* Gender Selection */}
                            <div className="form-group mb-3">
                                <label style={{ color: '#6B779A' }}>Gender</label> <br />
                                <div className="btn-group d-flex justify-content-evenly" role="group" aria-label="Gender toggle button group">
                                    {/* Male Radio Button */}
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="gender"
                                        id="male"
                                        value="Male"
                                        onChange={handleChange}
                                        checked={formData.gender === 'Male'}
                                        required
                                    />
                                    <label
                                        className="btn"
                                        htmlFor="male"
                                        style={{
                                            display: 'flex',      
                                            justifyContent: 'center', 
                                            alignItems: 'center',      
                                            width: '60px',             
                                            height: '50px',
                                            backgroundColor: '#ED3636',
                                            borderRadius: '10px',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            opacity: 1,
                                        }}>
                                        Male
                                    </label>


                                    {/* Female Radio Button */}
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="gender"
                                        id="female"
                                        value="Female"
                                        onChange={handleChange}
                                        checked={formData.gender === 'Female'}
                                    />
                                    <label
                                        className="btn"
                                        htmlFor="female"
                                        style={{
                                            display: 'flex',           
                                            justifyContent: 'center',  
                                            alignItems: 'center',
                                            width: '30px',
                                            height: '50px',
                                            marginLeft: '20px',
                                            backgroundColor: '#6B779A0D',
                                            borderRadius: '10px',
                                            color: 'black',
                                        }}>
                                        Female
                                    </label>

                                    {/* Other Radio Button */}
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="gender"
                                        id="other"
                                        value="Other"
                                        onChange={handleChange}
                                        checked={formData.gender === 'Other'}
                                    />
                                    <label
                                        className="btn"
                                        htmlFor="other"
                                        style={{
                                            display: 'flex',           
                                            justifyContent: 'center',  
                                            alignItems: 'center',
                                            width: '30px',
                                            height: '50px',
                                            marginLeft: '20px',
                                            backgroundColor: '#6B779A0D',
                                            borderRadius: '10px',
                                            color: 'black',
                                        }}>
                                        Other
                                    </label>
                                </div>
                                {!validation.gender && <div className="invalid-feedback">Please select a gender.</div>} {/* Validation message */}
                            </div>

                            {/* Terms and Conditions Checkbox */}
                            <div className="form-group mb-3">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="termsCheck"
                                        required
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="termsCheck"
                                    >
                                        Accept Terms and Conditions
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="btn btn-primary w-100 mb-3" style={{
                                backgroundColor: '#ED3636',
                                height: '60px',
                                borderRadius: '20px',
                                fontFamily: 'Poppins',
                                fontWeight: '600',
                                fontSize: '18px',
                                lineHeight: '27px'
                            }}>
                                Sign up
                            </button>

                            {/* Link to Login Page */}
                            <p className="text-center">
                                Already have an account? &nbsp;
                                <a href="/login" style={{
                                    color: '#ED3636',
                                    textDecoration: 'underline'
                                }}>
                                    Log in
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
