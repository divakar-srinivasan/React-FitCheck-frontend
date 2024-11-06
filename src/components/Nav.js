import React, { useState, useEffect, useRef } from "react";
import logo from "../images/logo.png";
import { IoMenu } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { MdEmojiEvents } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import gsap from "gsap";

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const listRefs = [useRef(null), useRef(null),useRef(null), useRef(null),useRef(null),useRef(null), useRef(null)];
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const t1 = gsap.timeline();
    listRefs.forEach((ref, index) => {
      t1.from(ref.current, { x: -500, opacity: 0, duration: 0.2, ease: "power2.out", delay: index * 0.2 });
    });
    t1.from(inputRef.current, { y: -100, opacity: 0, scale: 0.5, duration: 0.5, ease: "power2.in" });
  }, []);

  const handleLogout = () => {
    setShowLogout(false);
    navigate("/signin");
  };

  return (
    <>
      <div className="flex sticky top-0 items-center justify-between md:px-16 md:py-5 px-2 py-3 w-full bg-black z-10 border-b">
        <img className="md:h-16 md:w-32 h-16 w-28" src={logo} alt="loading" />
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li ref={listRefs[0]} className="nav-link">
              <Link to="/home">Home</Link>
            </li>
            <li ref={listRefs[1]} className="nav-link">
              <Link to="calculator">Calculator</Link>
            </li>
            <li ref={listRefs[2]} className="nav-link">
              <Link to="health">Health</Link>
            </li>
            <li ref={listRefs[3]} className="nav-link">
              <Link to="progress">Progress</Link>
            </li>
            <li ref={listRefs[4]} className="nav-link">
              <Link to="cart">Cart</Link>
            </li>
            <li ref={listRefs[5]} className="nav-link">
              <Link to="contact">Contact Us</Link>
            </li>
            <li ref={listRefs[6]} className="nav-link">
              <Link to="about">About Us</Link>
            </li>
          </ul>
        </nav>
        {toggleMenu && (
          <nav className="md:hidden block">
            <ul className="flex flex-col fixed h-52 overflow-auto w-full bg-black top-20 left-0 p-5 justify-between">
              <li className="nav-link">
                <Link to="/home" className="flex items-center space-x-10">
                  <MdEmojiEvents className="text-white" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="calculator" className="flex items-center space-x-10">
                  <GrWorkshop className="text-white" />
                  <span>Calculator</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="contact" className="flex items-center space-x-10">
                  <RiContactsFill className="text-white" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="about" className="flex items-center space-x-10">
                  <FcAbout className="text-white" />
                  <span>About Us</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
        <div className="flex md:gap-5 gap-3 items-center relative">
          <input
            ref={inputRef}
            className="bg-custom-black w-36 h-10 md:w-56 border-2 border-gray-400 rounded-lg text-white px-2 hover:border-custom-red placeholder-slate-200 hover:placeholder-white hover:bg-gray-900 hover:scale-105"
            type="text"
            placeholder="    Search"
          />
          <div className="relative">
            <IoMdContact
              className="h-8 w-8 text-white hover:text-custom-red cursor-pointer"
              onClick={() => setShowLogout((prev) => !prev)}
            />
            {showLogout && (
              <div
                className="absolute top-10 right-0 bg-black border border-gray-600 rounded-md shadow-lg"
                onClick={handleLogout}
              >
                <button className="text-white p-2 w-full hover:bg-gray-700">Logout</button>
              </div>
            )}
          </div>
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="block md:hidden text-white hover:text-custom-red"
          >
            <IoMenu className="h-8 w-8" />
          </button>
        </div>
      </div>
      {toggleMenu && <div className="mt-48"></div>}
      <Outlet />
    </>
  );
};

export default Home;
