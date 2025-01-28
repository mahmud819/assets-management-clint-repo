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
    <div className="flex flex-col lg:flex lg:flex-row">
      <div className="bg-red-400 w-full lg:h-min-scheen lg:w-1/5">
          <div className="avatar flex p-6 justify-center ">
            <div className="ring-primary  ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
             {<img className="" src={userInfo?.profilePhoto} />}
            </div>
          </div>
          <div className="grid grid-cols-2  list-none lg:flex lg:flex-col lg:gap-y-2 lg:p-4">
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
      <div className="w-full bg-gray-300 lg:w-4/5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
