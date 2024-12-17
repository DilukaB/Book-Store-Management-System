import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import { IoSearch } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import avatar_icon from "../assets/avatar.jpg";
import { IoBookSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

const navigationItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "CheckOut", href: "/checkout" }
];

const Navbar = () => {
    const [isDropdownOpen, setIsDropdown] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItems);
    console.log(cartItems)

    const { currentUser, logout } = useAuth()

    const handleLogOut = () => {
        logout()
    }


    return (
        <header className="header">
            <nav className="nav">
                {/* Left-side */}
                <div className="left-side">
                    {/* Menu icon */}
                    <Link to="/" className="menu-icon">
                        <IoBookSharp className="cursor-pointer" />
                    </Link>

                    {/* Search bar */}
                    <div className="search-bar">
                        <IoSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search here"
                            className="input"
                        />
                    </div>
                </div>

                {/* Right-side */}
                <div className="right-side">
                    <div >
                        {currentUser ? (
                            <>
                                <button onClick={() => setIsDropdown(!isDropdownOpen)} className="profile-button">
                                    <img src={avatar_icon} alt="User avatar" className="size-6 rounded-icon" />
                                </button>
                                {
                                    isDropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                            <ul className='py-2'>
                                                {
                                                    navigationItems.map((item) => (
                                                        <li key={item.name}>

                                                            <Link to={item.href}>{item.name}</Link>
                                                        </li>
                                                    ))}
                                                <li>
                                                    <button
                                                        onClick={handleLogOut}
                                                        className='w-full text-left'>Logout</button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                            </>
                        ) : (
                            <Link to="/login" className="profile">
                                <FaUserAlt className="user-icon" />
                                <span>Login</span>
                            </Link>
                        )}
                    </div>

                    <button className="favorites">
                        <BsFillHeartFill />
                    </button>

                    <Link to="/cart" className="cart">
                        <FaCartShopping />
                        {
                            cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>
                        }

                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar; 