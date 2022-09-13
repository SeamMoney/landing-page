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

const NavMobile = () => {
  return (
    <div className="w-full md:block md:w-auto items-center" id="mobile-menu">
            <ul className="flex flex-col items-center md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">

                {nav_items.map((item, i) => (
                    <div>
                    <li className='transition duration-150 border-b-4 border-transparent hover:border-white'>
                        <a href={item.path} className=" ">{item.name}</a>
                    </li>
                    <br/>
                    </div>
                ))}
                
            </ul>
        </div>
  );
};

export default NavMobile;