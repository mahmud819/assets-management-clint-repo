import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useUserInfo from "../Hooks/useUserInfo";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const DashBoard = () => {
  const userInfo = useUserInfo();
  const {userLogOut,user}=useContext(AuthContext);
//   const photo = userInfo[0]?.profilePhoto;
  // console.log(userInfo);
  return (
    <div className="flex    ">
      <div className="w-1/5 h-min-scheen bg-red-400">
          <div className="avatar flex p-6 justify-center">
            <div className="ring-primary  ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
             {<img className="" src={userInfo?.profilePhoto} />}
            </div>
          </div>
          <div className="flex flex-col gap-y-2 p-4 list-none">
          {<li className="hover:bg-gray-300 p-2 rounded-xl "><NavLink to='/' className=' ml-2'>Home</NavLink></li>}
          {userInfo?.role=='hr'&&<li className="hover:bg-gray-300 p-2 rounded-xl " ><NavLink to='/dashBoard/assetsList' className=' ml-2'>Assets List</NavLink></li>}
          {userInfo?.role=='employee'&&<li className="hover:bg-gray-300 p-2 rounded-xl " ><NavLink to='/dashBoard/myRequestedAssets' className=' ml-2'>My Requested Assets</NavLink></li>}
          {userInfo?.role=='employee'&&<li className="hover:bg-gray-300 p-2 rounded-xl " ><NavLink to='/dashBoard/requestForAsset' className=' ml-2'>Request for an Asset</NavLink></li>}
          {userInfo?.role=='employee'&&<li className="hover:bg-gray-300 p-2 rounded-xl " ><NavLink to='/dashBoard/myTeam' className=' ml-2'>My Team</NavLink></li>}
          {userInfo?.role=='hr'&&<li className="hover:bg-gray-300 p-2 rounded-xl "><NavLink to='/dashBoard/addAnAsset' className=' ml-2'>Add an Asset</NavLink></li>}
          {userInfo?.role=='hr'&&<li className="hover:bg-gray-300 p-2 rounded-xl "><NavLink to='/dashBoard/allRequests' className=' ml-2'>All Requests</NavLink></li>}
          {userInfo?.role=='hr'&&<li className="hover:bg-gray-300 p-2 rounded-xl "><NavLink to='/dashBoard/myEmployeeList' className=' ml-2'>My Employee List</NavLink></li>}
          {userInfo?.role=='hr'&&<li className="hover:bg-gray-300 p-2 rounded-xl "><NavLink to='/dashBoard/addAnEmployee' className=' ml-2'>Add an Employee</NavLink></li>}
          {user?.email && <li className="hover:bg-gray-300 p-2 rounded-xl "><NavLink to='/dashBoard/profile' className=' ml-2'>Profile</NavLink></li>}
          {<li className="hover:bg-gray-300 p-2 rounded-xl "><button onClick={userLogOut}  className=' ml-2'>Logout</button></li>}
          </div>
      </div>
      <div className="w-4/5 bg-gray-300">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
