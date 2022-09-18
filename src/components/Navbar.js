import React from 'react';
import Logo from './Logo';
import { useState } from 'react';
import Nav from './Nav';
import NavMobile from './NavMobile';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';


const Navbar = () => {
  const [nav, setNav, logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

    return (
        <div className='flex w-full justify-between items-center h-30 px-10 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>

        <a href="/" className="flex items-center">
            <Logo />
        </a>
        </h1>
      </div>
      <ul className='hidden md:flex'>
        <Nav/>
      </ul>
      <div className='hidden md:flex'>
      <a style={{display: "table-cell"}} href = "https://app.seam.money" target = "_blank" rel = "noopener noreferrer">
        <button className="seam-button m-3 hidden w-full flex flex-col md:block flex md:w-auto">Launch App</button>
        </a>
      </div>

      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-white' size={20} /> : <HiOutlineMenuAlt4 size={20} />}

      </div>



      <div onClick={handleNav} className={nav ? 'absolute text-white left-0 top-0 w-full px-4 py-56 flex flex-col bg-gradient-to-r from-[#000000] via-[#0085CC] to-[#005DA2] w-full overflow-hidden min-h-screen' : 'absolute left-[-100%]'}>
        {/* // here is where I need to write code to make the background blurry / hide all the back content so I can see the navbar

        // or have a small black box come down half way as background */}
        <ul>
            <br />
            <br />
            <br />
          <NavMobile/>
          <br/>
          <div className='flex flex-col items-center'>

            <a style={{display: "table-cell"}} href = "https://app.seam.money" target = "_blank" rel = "noopener noreferrer">
                <button className='seam-button'>Launch App</button>
            </a>
          </div>
        </ul>
      </div>
    </div>
    );
};

export default Navbar;
