import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [userName, setUserName] = useState("");

    const handleClick = () => {
        setIsOpen(!isOpen);
        console.log("Clicked");
    };

    useEffect(() => {
        const name = sessionStorage.getItem("name");
        if (name) {
            setUserName(name);
        }
    }, []);

    return (
        <nav>
            <div className="nav__logo">
                <Link to="/">
                    StayHealthy
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="26"
                        width="26"
                        viewBox="0 0 1000 1000"
                        style={{ fill: "#3685fb" }}
                    >
                        <title>Doctor With Stethoscope SVG icon</title>
                        <g>
                            <g>
                                <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z" />
                                <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z" />
                                <path d="M693.2,395c-0.7,94.9-70.3,173.7-160.8,188.9v155.9c0,80.3-60.7,150.8-140.8,155.3c-83,4.7-152.7-58.9-157.6-139.7c-22-12.8-35.6-38.5-30.3-66.7c4.7-25.1,25.5-45.6,50.8-49.9c39.7-6.7,74.1,23.7,74.1,62.1c0,23-12.3,43-30.7,54.1c4.7,45.4,45.1,80.4,92.6,76c44.6-4,77.2-44...." />
                            </g>
                        </g>
                    </svg>
                </Link>
                <span>.</span>
            </div>

            <button className="nav__icon" onClick={handleClick} aria-label="Toggle Menu">
                <i className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>

            <ul className={`nav__links ${isOpen ? "active" : ""}`}>
                <li className="link">
                    <Link to="../Landing_Page">Home</Link>
                </li>
                <li className="link">
                    <Link to="/">Appointments</Link>
                </li>
                {/* ✅ Show Welcome Message if user is logged in */}
                {userName ? (
                    <>
                    <li className="link welcome-msg" style={{ color: "#3685fb", fontWeight: "bold" }}>
                        Welcome, {userName}
                    </li>
          
                    <li className="link">
                        <button className="btn1" onClick={() => {
                            sessionStorage.clear()
                            window.location.reload();
                        }}>
                            Logout
                        </button>
                    </li>
                    </>
                )
                 : (
                <>
                    <li className="link">
                        <Link to="/signup"><button className="btn1">Sign Up</button></Link>
                    </li>
                    <li className="link">
                        <Link to="/Login"><button className="btn1">Login</button></Link>
                    </li>
                </>
        )}
            </ul>
        </nav>
    );
}
