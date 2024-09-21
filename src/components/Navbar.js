import React, { useState } from 'react';

const Navbar = () => {
    // Manage dropdown states for each button
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <nav className="py-[7px] border-b flex items-center justify-center shadow-sm">
            <div className="w-full flex justify-between items-center mx-20">
                {/* Logo */}
                <div className="text-lg font-bold">
                    <img src='/logo.png' alt="Logo" />
                </div>

                {/* Navbar Links with Dropdowns */}
                <div className="hidden md:flex space-x-6 text-gray-900/70 font-semibold">
                    {/* dropdown - Catalog */}
                    <button className='hover:text-[#20c45c] transition duration-200 text-sm'>Catalog</button>

                    {/* Dropdown - How it Works */}
                    <div
                        className="relative group"
                        onMouseEnter={() => toggleDropdown('How it works')}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <button
                            onClick={() => toggleDropdown('How it works')}
                            className={`flex text-sm text-gray-900/70 items-center focus:outline-none ${openDropdown === 'How it works' ? 'text-[#20c45c]' : 'text-black'} hover:text-[#20c45c] transition duration-200`}
                        >
                            How it works
                            <svg
                                className={`w-3 h-3 ml-1 transition-transform transform duration-300 ${openDropdown === 'How it works' ? 'rotate-180' : 'rotate-0'} text-black`}
                                fill="currentColor"
                                stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {openDropdown === 'How it works' && (
                            <div
                                className="absolute right-0 mt-1 w-48 bg-white border-gray-100 border rounded-md py-2 z-50 
                                transition-opacity duration-150 ease-in-out opacity-0 group-hover:opacity-100 
                                transform scale-95 group-hover:scale-100 "
                                onMouseEnter={() => setOpenDropdown('How it works')}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <a href="/" className="block px-4 py-1 text-gray-900/70 text-sm hover:text-[#20c45c] transition duration-200">
                                    How Printify Works
                                </a>
                                <a href="/" className="block px-4 py-1 text-gray-900/70 text-sm hover:text-[#20c45c] transition duration-200">
                                    Print On Demand
                                </a>
                                <a href="/" className="block px-4 py-1 text-gray-900/70 text-sm hover:text-[#20c45c] transition duration-200">
                                    Printify Quality Promise
                                </a>
                                <a href="/" className="block px-4 py-1 text-gray-900/70 text-sm hover:text-[#20c45c] transition duration-200">
                                    What to Sell?
                                </a>
                            </div>
                        )}
                    </div>

                    {/* dropdown - Priceing */}
                    <button className='hover:text-[#20c45c] transition duration-200 text-sm'>Priceing</button>

                    {/* dropdown - Blog */}
                    <button className='hover:text-[#20c45c] transition duration-200 text-sm'>Blog</button>

                    {/* Dropdown - Services */}
                    <div
                        className="relative group"
                        onMouseEnter={() => toggleDropdown('Services')}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <button
                            onClick={() => toggleDropdown('Services')}
                            className={`flex text-sm text-gray-900/70 items-center focus:outline-none ${openDropdown === 'Services' ? 'text-[#20c45c]' : 'text-black'} hover:text-[#20c45c] transition duration-200`}
                        >
                            Services
                            <svg
                                className={`w-3 h-3 ml-1 transition-transform transform duration-300 ${openDropdown === 'Services' ? 'rotate-180' : 'rotate-0'} text-black`}
                                fill="currentColor"
                                stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {openDropdown === 'Services' && (
                            <div
                                className="absolute right-0 mt-1 w-48 bg-white border-gray-100 border rounded-md py-2 z-50 
                                transition-opacity duration-150 ease-in-out opacity-0 group-hover:opacity-100 
                                transform scale-95 group-hover:scale-100"
                                onMouseEnter={() => setOpenDropdown('Services')}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <a href="/" className="block px-4 py-1 text-gray-900/70 text-sm hover:text-[#20c45c] transition duration-200">
                                    Printify Studio
                                </a>
                                <a href="/" className="block px-4 py-1 text-gray-900/70 text-sm hover:text-[#20c45c] transition duration-200">
                                    Printify Express Delivery
                                </a>
                                <a href="/" className="block px-4 py-1 text-gray-900/70 text-sm hover:text-[#20c45c] transition duration-200">
                                    Transfer Products
                                </a>
                                <a href="/" className="block px-4 py-1 text-gray-900/70 text-sm hover:text-[#20c45c] transition duration-200">
                                    Order In Bulk
                                </a>
                                <a href="/" className="block px-4 py-1 text-gray-900/70 text-sm hover:text-[#20c45c] transition duration-200">
                                    Experts Program
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Dropdown - Use-Cases */}
                    <div
                        className="relative group"
                        onMouseEnter={() => toggleDropdown('Use-Cases')}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <button
                            onClick={() => toggleDropdown('Use-Cases')}
                            className={`flex text-sm text-gray-900/70 items-center focus:outline-none ${openDropdown === 'Use-Cases' ? 'text-[#20c45c]' : 'text-black'} hover:text-[#20c45c] transition duration-200`}
                        >
                            Use-Cases
                            <svg
                                className={`w-3 h-3 ml-1 transition-transform transform duration-300 ${openDropdown === 'Use-Cases' ? 'rotate-180' : 'rotate-0'} text-black`}
                                fill="currentColor"
                                stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {openDropdown === 'Use-Cases' && (
                            <div
                                className="absolute right-0 mt-1 w-48 bg-white border-gray-100 border rounded-md py-2 z-50 
                                transition-opacity duration-150 ease-in-out opacity-0 group-hover:opacity-100 
                                transform scale-95 group-hover:scale-100"
                                onMouseEnter={() => setOpenDropdown('Use-Cases')}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <a href="/" className="block px-4 py-1 text-gray-900/70 text-sm hover:text-[#20c45c] transition duration-200">
                                Merch for Fans
                                </a>
                                <a href="/" className="block px-4 py-1 text-gray-900/70 text-sm hover:text-[#20c45c] transition duration-200">
                                Merch for eCommerce
                                </a>
                                <a href="/" className="block px-4 py-1 text-gray-900/70 text-sm hover:text-[#20c45c] transition duration-200">
                                Merch for Enterprises
                                </a>
                                <a href="/" className="block px-4 py-1 text-gray-900/70 text-sm hover:text-[#20c45c] transition duration-200">
                                Grow Your Store
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Dropdown - Need Help? */}
                    <div
                        className="relative group"
                        onMouseEnter={() => toggleDropdown('Need Help?')}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <button
                            onClick={() => toggleDropdown('Need Help?')}
                            className={`flex text-sm text-gray-900/70 items-center focus:outline-none ${openDropdown === 'Need Help?' ? 'text-[#20c45c]' : 'text-black'} hover:text-[#20c45c] transition duration-200`}
                        >
                            Need Help?
                            <svg
                                className={`w-3 h-3 ml-1 transition-transform transform duration-300 ${openDropdown === 'Need Help?' ? 'rotate-180' : 'rotate-0'} text-black`}
                                fill="currentColor"
                                stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {openDropdown === 'Need Help?' && (
                            <div
                                className="absolute right-0 mt-1 w-48 bg-white border-gray-100 border rounded-md py-2 z-50 
                                transition-opacity duration-150 ease-in-out opacity-0 group-hover:opacity-100 
                                transform scale-95 group-hover:scale-100"
                                onMouseEnter={() => setOpenDropdown('Need Help?')}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <a href="/" className="block px-4 py-1 text-gray-900/70 text-sm hover:text-[#20c45c] transition duration-200">
                                    Help Center
                                </a>
                                <a href="/" className="block px-4 py-1 text-gray-900/70 text-sm hover:text-[#20c45c] transition duration-200">
                                    Contacts
                                </a>
                                <a href="/" className="block px-4 py-1 text-gray-900/70 text-sm hover:text-[#20c45c] transition duration-200">
                                    My Requests
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Log In and Sign Up Buttons */}
                <div className='flex gap-4'>
                    <button className="text-sm font-semibold rounded-md text-gray-900/80 hover:text-[#20c45c] transition duration-200 px-5 py-[5px] border border-gray-400">
                        Log In
                    </button>
                    <button className="text-sm font-semibold rounded-md bg-[#20c45c] text-white hover:bg-[#46a768] transition duration-200 px-5 py-[5px] border">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
