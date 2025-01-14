import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import '../../App.css'
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {

  const {user,userLogOut}=useContext(AuthContext);
  console.log(user);
    
    const links1 = <>
        <li>
            <NavLink to='/' className='btn '>Home</NavLink>
          </li>
          <li>
            <NavLink to='/joinAsEmployee' className='btn ml-2'>Join as Employee</NavLink>
          </li>
          <li>
            <NavLink to='/joinAsHR' className='btn ml-2'>Join as HR Manager</NavLink>
          </li>
          {
            <li>
            <NavLink to='/test' className='btn ml-2'>test Manager</NavLink>
          </li>
          }
    </>
        
    
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links1}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links1}
        </ul>
      </div>
      <div className="navbar-end">
        <h1 className="mr-2" >{user?.email}</h1>
        {user?.email?<NavLink onClick={userLogOut} className="btn ">Logout</NavLink>:<div>
          <NavLink to='/login' className="btn ">Login</NavLink>
          <NavLink to='/register' className="btn ml-2">Register</NavLink>
          </div>}
        
      </div>
    </div>
  );
};

export default Navbar;
