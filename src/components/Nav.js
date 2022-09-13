import React from 'react';

const nav_items = [
    {
        name: 'Vaults',
        path: "https://app.seam.money/vaults"
    },
    {
        name: 'Explorer',
        path: 'https://app.seam.money/explorer'
    },
    {
        name: 'Staking',
        path: 'https://app.seam.money/staking',
    },

];

const Nav = () => {
  return (
    <nav>
        <div id="mobile-menu">
            <ul className="flex flex-col items-center md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                {nav_items.map((item, i) => (
                    <li className='transition duration-150 border-b-4 border-transparent hover:border-white' >
                        <a href={item.path} className=" ">{item.name}</a>
                    </li>
                ))}
                
            </ul>
        </div>
    </nav>
  );
};

export default Nav;