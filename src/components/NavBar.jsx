import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-scroll';

const NavBar = () => {

    const [nav, setNav] = useState(true);
    const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);
    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <nav className = ' flex justify-between items-center h-24 w-full mx-auto px-4 bg-emerald-600 bg-opacity-30 text-white md:fixed md:top-0'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] '>REACT.</h1>         
            <ul className='hidden md:flex text-[#00df9a] cursor-pointer'>

                <li className='p-4 active:text-white'>
                <Link to="hero" spy={true} smooth={true} offset={0} onclick={closeMenu}>Hero</Link>
                </li>
                <li className='p-4 active:text-white'>
                <Link to="about" spy={true} smooth={true} offset={-100} onclick={closeMenu}>About</Link>
                </li>
                <li className='p-4 active:text-white'>
                <Link to="contact" spy={true} smooth={true} offset={-100} onclick={closeMenu}>Contact</Link>
                </li>
                <li className='p-4 active:text-white'>
                <Link to="work" spy={true} smooth={true} offset={-100} onclick={closeMenu}>Works</Link>
                </li>
                <li className='p-4 active:text-white'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden '>
            {
                !nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />
            }

            </div>
        
        
        <div className= {!nav? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%] ease-in-out duration-500'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
            <ul className='uppercase p-4 cursor-pointer'>
                <li className='p-4 border-b border-gray-600'>
                <Link to="hero" spy={true} smooth={true} offset={0} onclick={closeMenu}>Hero</Link>
                </li>
                <li className='p-4 border-b border-gray-600'>
                <Link to="about" spy={true} smooth={true} offset={0} onclick={closeMenu}>About</Link>
                </li>
                <li className='p-4 border-b border-gray-600'>
                <Link to="contact" spy={true} smooth={true} offset={0} onclick={closeMenu}>Contact</Link>
                </li>
                <li className='p-4 border-b border-gray-600'>
                <Link to="work" spy={true} smooth={true} offset={0} onclick={closeMenu}>Works</Link>
                </li>
                <li className='p-4 '>Contact</li>
            </ul>
        </div>
  </nav>
  
  )
}

export default NavBar