import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxios from "../../SharedElement/Hooks/useAxios";
import useUserInfo from "../../SharedElement/Hooks/useUserInfo";

const Navbar = () => {

  const { user, userLogOut, setLoading } = useContext(AuthContext);
  const userInfo = useUserInfo();
  const axiosHook = useAxios();
  const [loginUser, setLoginUser] = useState();
  useEffect(() => {
    setLoading(true);
    axiosHook
      .get("/users")
      .then((res) => {
        // console.log(res.data);
        const data = res?.data.filter((d) => d?.email == user?.email);
        // console.log(data);
        setLoginUser(data);
      })
      .catch((err) => {
        console.log(err, err?.message);
      });
    setLoading(false);
  }, [user?.email]);

  // console.log(user,loginUser);

  const links1 = (
    <>
      <li>
        <NavLink to="/" className="custom-btn">
          Home
        </NavLink>
      </li>

      {!user?.email && (
        <li>
          <NavLink to="/joinAsEmployee" className="custom-btn ml-2">
            Join as Employee
          </NavLink>
        </li>
      )}
      {!user?.email && (
        <li>
          <NavLink to="/joinAsHR" className="custom-btn ml-2">
            Join as HR Manager
          </NavLink>
        </li>
      )}

      {user?.email && (
        <li>
          <NavLink to="/dashBoard" className="custom-btn ml-2">
            DashBoard
          </NavLink>
        </li>
      )}
    </>
  );
// console.log(userInfo,userInfo.companyLogo);
  return (
    <div className="navbar fixed top-0 z-20 backdrop-blur-lg border border-white/30 bg-[rgb(19, 15, 64)] ">
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
        {!userInfo?.email&& 
           <div className="w-20 h-20">
             <img className="w-[100%] h-[100%]" src="https://i.ibb.co/Rpqk8JZL/freepik-20250512235446-E0-Yy.png" alt="" />
             {/* <Link to='/' className="btn btn-ghost text-md font-xtrabold text-white lg:text-xl">Assets Manager</Link> */}
           </div>
          }
        {userInfo?.email&&<div className="avatar">
          <div className="mask mask-hexagon w-8 lg:w-14">
            <img src={userInfo.companyLogo} />
          </div>
        </div>}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links1}</ul>
      </div>
      <div className="navbar-end">
        <h1 className="mr-2 hidden text-xsm lg:text-md">{user?.email}</h1>
        {user?.email ? (
          <NavLink onClick={userLogOut} className="custom-btn">
            Logout
          </NavLink>
        ) : (
          <div>
            <NavLink to="/login" className="custom-btn">
              Login
            </NavLink>
            {/* <NavLink to='/register' className="btn ml-2">Register</NavLink> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
