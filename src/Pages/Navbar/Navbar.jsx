import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/" className="btn ">
          Home
        </NavLink>
      </li>

      {!user?.email && (
        <li>
          <NavLink to="/joinAsEmployee" className="btn ml-2">
            Join as Employee
          </NavLink>
        </li>
      )}
      {!user?.email && (
        <li>
          <NavLink to="/joinAsHR" className="btn ml-2">
            Join as HR Manager
          </NavLink>
        </li>
      )}

      {user?.email && (
        <li>
          <NavLink to="/dashBoard" className="btn ml-2">
            DashBoard
          </NavLink>
        </li>
      )}
    </>
  );
// console.log(userInfo,userInfo.companyLogo);
  return (
    <div className="navbar bg-[#9D214F]">
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
        {userInfo?.email&&<div className="avatar">
          <div className="mask mask-hexagon w-8 lg:w-16">
            <img src={userInfo.companyLogo} />
          </div>
        </div>}
        <a className="btn btn-ghost text-md font-xtrabold lg:text-xl">Assets Manager</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links1}</ul>
      </div>
      <div className="navbar-end">
        <h1 className="mr-2 hidden text-xsm lg:text-md">{user?.email}</h1>
        {user?.email ? (
          <NavLink onClick={userLogOut} className="btn ">
            Logout
          </NavLink>
        ) : (
          <div>
            <NavLink to="/login" className="btn ">
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
