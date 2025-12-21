import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import loginImage from "../assets/loginImage.jpg"

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='absolute top-0 left-0 z-[999] w-full bg-black'>
      <div className="flex justify-between items-center px-10 lg: py-2 relative">
        <button className='lg:hidden text-white text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fa-solid ${ menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>

        <div className="flex items-center space-x-2 text-white font-bold text-5xl">
          <Link to='/'>
            <span className='tracking-wider dancing-script'>
              Ni<span className='text-[#005414] dancing-script'>ra</span>loy
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

        <div className="flex items-center">
          <div className="hidden lg:flex items-center space-x-1 text-white text-lg">
            <i className='fas fa-phone-alt'></i>
            <span className='font-[500]'> xxxxx xxxxx</span>

            <button onClick={() => setShowModal(true)} className='text-white text-xl'>
              <i className='fa-regular fa-user hover:text-[#005414] transition m-5'></i>
            </button>

            <button className='nav-btn bg-[#005414] border border-[#005414] btn relative text-white rounded overflow-hidden py-2 px-4 font-[600]'>
              <a href="#" className='z-[1] relative'>Add Listing</a>
            </button>
          </div>
        </div>

        <div className={`lg:hidden nav-menu transform transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 max-h-screen translate-y-0' : 'opacity-0 max-h-0 translate-y-4'} overflow-hidden bg-black text-white px-8 py-4 space-y-3`}>
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
        </div>

        {showModal && (
          <div className="fixed inset-0 z-50 bg-white/15 backdrop-blur-md backdrop-saturate-150 flex justify-center items-center">
            <div className="bg-gray-100 w-full max-w-4xl rounded-lg flex items-center lg:items-center overflow-hidden shadow-2xl  ">
              <div className="w-1/2 hidden md:block relative">
                <div className="login-image-overlay"></div>
                <img src={loginImage} alt="login" className='w-full h-full object-cover'/>
                <div className="absolute bottom-0 left-0 flex items-end w-full h-full font-bold bg-black/60 font-bricolage text-white text-6xl pb-4 pl-4 "><h1 className='dancing-script'>Welcome</h1></div>
              </div>

              <div className="w-full md:w-1/2 p-8 relative h-full ">
                <button className='absolute top-4 right-4 hover:text-black text-3xl ' onClick={() => {setShowModal(false)}}>&times;</button>
                <h2 className="text-2xl font-semibold text-black mb-6 "> Sign into your account</h2>
              

                <div className="space-y-4">
                  <input type="text" placeholder='Username' className='w-full border px-4 py-2 rounded' />
                  <div className="relative">
                    <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='w-full border px-4 py-2 rounded pr-10' />
                    <button type='button' className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 ' onClick={() => setShowPassword(!showPassword)}>
                      <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  </div>
                  <button className='w-full bg-[#005414] text-white font-semibold py-2 text-lg border-2 border-[#005414] hover:bg-transparent hover:text-[#005414] rounded transition-all duration-150 '>Sign in</button>
                </div>

                <div className="flex justify-between text-end mt-4 text-[#005414] ">
                  <button className='hover:underline '>Register!</button>
                  <button className='hover:underline '>Forgot password?</button>
                </div>
              </div>
              
            </div>
          </div>
        )}
        
        

      </div>
    </div>
  )
}

export default Nav