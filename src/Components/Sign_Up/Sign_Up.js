import React, { useState } from 'react';
import './Sign_Up.css';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

// Function component for Sign Up form
const Sign_Up = () => {
    // State variables using useState hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages

    const navigate = useNavigate(); // Navigation hook from react-router

    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setShowerr(''); // Clear previous error

        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    phone,
                }),
            });

            const json = await response.json(); // Parse the response JSON

            if (json.authtoken) {
                // Store user data in session storage
                sessionStorage.setItem("auth-token", json.authtoken);
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("phone", phone);
                sessionStorage.setItem("email", email);

                // Redirect user to home page
                navigate("/");
                window.location.reload();
            } else {
                if (json.errors && json.errors.length > 0) {
                    setShowerr(json.errors[0].msg);
                } else {
                    setShowerr(json.error || "Registration failed");
                }
            }
        } catch (err) {
            setShowerr("Something went wrong. Please try again.");
            console.error(err);
        }
    };

    // JSX to render the Sign Up form
    return (
        <div className="container" >
            <div className="signup-grid">
                <div className="signup-form">
                    <h1 style={{ textAlign: "center" }}>Sign Up</h1>
                    <form method="POST" onSubmit={register}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                                aria-describedby="helpId"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                name="phone"
                                id="phone"
                                className="form-control"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                            />
                        </div>

                        {showerr && Array.isArray(showerr) ? (
                            showerr.map((err, index) => (
                                <div key={index} className="err" style={{ color: 'red' }}>{err.msg}</div>
                            ))
                        ) : (
                            <div className="err" style={{ color: 'red' }}>{showerr}</div>
                        )}


                        <button type="submit" className="btn btn-primary mt-3">
                            Register
                        </button>
                        <p className="signup-text mt-2">
                            Already have an account?{' '}
                            <Link to="/Login" style={{ color: '#2190FF' }}>
                                Login here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sign_Up;
