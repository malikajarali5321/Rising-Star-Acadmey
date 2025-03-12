// import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../../public/logo.jpg'

const Navbar = () => {
  const [mode, setmode] = useState(0)
  const [another, setanother] = useState('none')
  const [count, setcount] = useState('flex')
  const [bar, setbar] = useState('flex')

  function change() {

    let hamburger = document.getElementById('hamburger');
    let cross = document.getElementById('cross');
    let nav = document.getElementById('nav');

    hamburger.style.display = another;
    cross.style.display = count;
    nav.style.display = bar;

    if (mode == 0) {
      setanother('flex')
      setcount('none')
      setbar('none')
      setmode(1)
    }
    else {
      setanother('none')
      setcount('flex')
      setbar('flex')
      setmode(0)
    }

  }
  return (
    <div className='fixed h-20 w-[100%] z-[9999]'>
      <div className='bg-[#141414] h-20'>
        <div className='flex items-center justify-between w-full px-16 py-2 max-lg:px-8 max-md:px-4 '>
          <img className="w-10" src={logo} alt="" />
          <div className='flex items-center py-3'>
            <ul className='flex gap-10 text-xl text-white max-lg:hidden '>
              <NavLink to={"/"} className="hover:text-[gold]" >Home</NavLink>
              <NavLink to={"/about"} className="hover:text-[gold]" >About</NavLink>
              <NavLink to={"/enroll_now"} className="hover:text-[gold]">Enroll Now</NavLink>
              <NavLink to={"now_hiring"} className="hover:text-[gold]" >Now Hiring</NavLink>
              <NavLink to={"contact_us"} className="hover:text-[gold]" >Contact Us</NavLink>
            </ul>
            <div className='flex max-lg:text-white max-lg:py-3 '>
              <i id='hamburger' onClick={change} className='hidden  max-lg:flex '><RxHamburgerMenu /></i>
              <i id='cross' onClick={change} className='hidden ' ><RxCross2 /></i>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul id='nav' onClick={change} className='flex-col px-4 text-xl bg-[#edf0eee7] gap-3 h-[24vh] pt-2 hidden max-md:h-[38%] '>
          <NavLink to={"/"} className="hover:text-[gold]" >Home</NavLink>
          <NavLink to={"/about"} className="hover:text-[gold]" >About</NavLink>
          <NavLink to={"/enroll_now"} className="hover:text-[gold]">Enroll Now</NavLink>
          <NavLink to={"now_hiring"} className="hover:text-[gold]" >Now Hiring</NavLink>
          <NavLink to={"contact_us"} className="hover:text-[gold]" >Contact Us</NavLink>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
