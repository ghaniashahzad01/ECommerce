import React from 'react';
import DarkModee from './DarkModee';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';

const Menu = [
  { id: 1, name: 'Home', link: '/#' },
  { id: 2, name: 'Top Rated', link: '/#services' },
  { id: 3, name: 'Kids Wear', link: '/#' },
  { id: 4, name: 'Men Wear', link: '/#' },
  { id: 5, name: 'Electronics', link: '/#' }
];

const Dropdownlist = [
  { id: 1, name: 'Trending Products', link: '/#' },
  { id: 2, name: 'Best Selling', link: '/#' }
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-[#0f172a] dark:text-white duration-200 relative z-40">
      {/* Top bar */}
      <div className="bg-primary/40 dark:bg-primary/10 py-2">
        <div className="container flex justify-between items-center px-4">
          {/* Logo */}
          <a href="#" className="font-bold text-xl items-center flex gap-1">
            <FiShoppingBag size="30" /> ShopMe
          </a>

          {/* Right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px]
                  transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm
                  focus:outline-none focus:border-1 focus:border-primary
                  dark:border-gray-600 dark:bg-slate-800 dark:text-white"
              />
              <IoMdSearch
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-800 dark:text-white"
              />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-t from-primary to-secondary transition-all duration-200
                text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">Order</span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Dark Mode Toggle */}
            <DarkModee />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div data-aos="zoom-in" className="flex justify-center bg-white dark:bg-[#0f172a]">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="inline-block px-4 py-2 hover:text-primary duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </a>
            <div
              className="absolute z-[999] hidden group-hover:block w-[200px] rounded-md
              bg-white dark:bg-slate-800 p-2 text-black dark:text-white shadow-md"
            >
              <ul>
                {Dropdownlist.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="hover:text-gray-400 duration-300">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
