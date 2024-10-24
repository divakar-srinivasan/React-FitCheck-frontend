import React, { useEffect, useRef, useState } from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import axios from "axios";

const Signin = () => {
  const navigate = useNavigate();
  const container = useRef(null);
  const input1 = useRef(null);
  const input2 = useRef(null);
  const btn = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(container.current, {
      xPercent: -100,
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: "power2.out",
    });
    t1.from(input1.current, {
      x: -500,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });
    t1.from(input2.current, {
      x: 500,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });
    t1.from(btn.current, {
      x: -500,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token); 
        navigate("/home"); 
      }
    } catch (error) {
      setError("Invalid email or password.");
      console.error(error);
    }
  };

  return (
    <div className="bg-img">
      <div className="flex itmes-center px-24 py-5 ">
        <img src={logo} alt="loading" className="h-18 w-32" />
      </div>
      <div className="flex items-center justify-center mt-3">
        <div ref={container} className="signin-container">
          <h1 className="text-white font-bold text-3xl mb-4">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <input
              ref={input1}
              className="input"
              type="text"
              placeholder="Email or mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
            <input
              ref={input2}
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
            <button ref={btn} className="signin-btn" type="submit">
              Sign In
            </button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>} {/* Show error message if login fails */}
          <h1 className="text-white cursor-pointer hover:text-sky-500">
            Forget password?
          </h1>
          <h1 className="text-center text-gray-400 text-xl">OR</h1>
          <h1 className="text-gray-400">
            New to Eventix?{" "}
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Sign up now
            </span>
          </h1>
          <p className="text-sm text-gray-400 mt-4 mb-5">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <span className="text-sky-500 cursor-pointer"> Learn more.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
