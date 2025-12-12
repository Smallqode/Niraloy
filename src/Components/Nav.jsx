import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import loginImage from "../assets/couple-login-modal.jpeg"

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='absolute top-0 left-0 z-[999] w-full bg-black'>
      <div className="flex justify-between items-center px-8 lg:px-20 py-5 relative">
        <button className='lg:hidden text-white text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fa-solid ${ menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>

        <div className="flex items-center space-x-2 text-white font-bold text-4xl">
          <Link to='/'>
            <span className='tracking-wider font-bricolage'>
              Ni<span className='text-[#005414] font-bicolage'>ra</span>loy
            </span>
          </Link>
        </div>

        <ul className="hidden nav-menu lg:flex space-x-5 text-white font-medium">
          <li className='hover:text-[#005414] transition-colors duration-150 cursor-pointer'>
            <Link to='/'>Home</Link>
          </li>
          <li className='hover:text-[#005414] transition-colors duration-150 cursor-pointer'>
            <Link to='/about'>About</Link>
          </li>
          <li className='hover:text-[#005414] transition-colors duration-150 cursor-pointer'>
            <Link to='/properties'>Properties</Link>
          </li>
          <li className='hover:text-[#005414] transition-colors duration-150 cursor-pointer'>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='hover:text-[#005414] transition-colors duration-150 cursor-pointer'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-1 text-white text-lg">
            <i className='fas fa-phone-alt'></i>
            <span className='font-[500]'> xxxxx xxxxx</span>

            <button onClick={() => setShowModal(true)} className='text-white text-xl'>
              <i className='fa-regular fa-user hover:text-[#005414] transition ml-5'></i>
            </button>

            <button className='nav-btn bg-[#005414] border border-[#005414] btn relative text-white rounded overflow-hidden py-2 px-4 font-[600]'>
              <a href="#" className='z-[1] relative'>Add Listing</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav