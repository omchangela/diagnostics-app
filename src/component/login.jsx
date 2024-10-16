import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import lineImage from '../assets/Line2.png';
import googleImage from '../assets/google.png';
import appleImage from '../assets/apple.png';
import facebookImage from '../assets/facebook.png';

const Login = () => {
    // State variables for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle login form submission
    const handleLogin = (e) => {
        e.preventDefault();
        console.log({ email, password }); // Log email and password (replace with actual login logic)
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {/* Card for the login form */}
                    <div className="card shadow rounded">
                        <div className="text-center mb-4 p-3" style={{ backgroundColor: '#ED3636' }}>
                            {/* Login title */}
                            <h2 className="text-white" style={{ fontFamily: 'Poppins', fontSize: '24px', fontWeight: '600' }}>Login</h2>
                        </div>

                        {/* Login form */}
                        <form onSubmit={handleLogin} className="p-4">
                            <div className="form-group mb-3">
                                <label style={{ color: '#6B779A' }}>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder='test@test.com'
                                    style={{ backgroundColor: '#6B779A0D' }}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // Update email state
                                    required // Ensure this field is required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label style={{ color: '#6B779A' }}>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder='********'
                                    style={{ backgroundColor: '#6B779A0D' }}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} // Update password state
                                    required // Ensure this field is required
                                />
                            </div>
                            <div className="d-flex justify-content-end mb-3">
                                {/* Link to forgot password page */}
                                <a href="/forgot-password" className="text-decoration-none text-black">Forgot Password?</a>
                            </div>
                            {/* Submit button */}
                            <button
                                type="submit"
                                className="btn w-100 mb-3 rounded-4"
                                style={{
                                    backgroundColor: '#ED3636',
                                    height: '60px',
                                    color: 'white',
                                    fontFamily: 'Poppins',
                                    fontSize: '18px',
                                    fontWeight: '600',
                                }}
                            >
                                Login
                            </button>

                            <div className="text-center mb-3 mt-1">
                                <img src={lineImage} alt="Line" style={{ width: '50px', paddingBottom: '5px' }} />
                                &nbsp; Or sign in with &nbsp;
                                <img src={lineImage} alt="Line" style={{ width: '50px', paddingBottom: '5px' }} />
                            </div>

                            {/* Social login buttons */}
                            <div className="d-flex justify-content-center mb-3">
                                <button type="button" className="btn"><img src={googleImage} alt='Google Image' /></button>
                                <button type="button" className="btn"><img src={facebookImage} alt='Facebook Image' /></button>
                                <button type="button" className="btn"><img src={appleImage} alt='Apple Image' /></button>
                            </div>

                            <p className="text-center">
                                Don't have an account? &nbsp;
                                <a
                                    href="/signup"
                                    style={{
                                        color: '#9C724B',
                                        fontFamily: 'Poppins',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        textDecoration: 'none' // Remove underline
                                    }}
                                >
                                    Register Now
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
