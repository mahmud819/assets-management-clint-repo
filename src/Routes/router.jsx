import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import JoinAsEmployee from "../Pages/JoinAsEmployee/JoinAsEmployee";
import JoinAsHR from "../Pages/JoinAsHR/JoinAsHR";
import NormalHome from "../Pages/Home/NormalHome/NormalHomePage/NormalHome";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashBoard from "../SharedElement/DashBoard/DashBoard";
import Home from "../Pages/Home/Home/Home";
import AssetsList from "../Pages/HRPages/AssetsList/AssetsList";
import AddAnAsset from "../Pages/HRPages/AddAnAsset/AddAnAsset";
import AllRequests from "../Pages/HRPages/AllRequests/AllRequests";
import MyEmployeeList from "../Pages/HRPages/MyEmployeeList/MyEmployeeList";
import AddAnEmployee from "../Pages/HRPages/AddAnEmployee/AddAnEmployee";
import MyRequestedAssets from "../Pages/EmployeePages/MyRequestedAssets/MyRequestedAssets";
import RequestForAsset from "../Pages/EmployeePages/RequestForAsset/RequestForAsset";
import MyTeam from "../Pages/EmployeePages/MyTeam/MyTeam.JSX";
import Profile from "../Pages/Profile/Profile";
// import MyTeam from "../Pages/EmployeePages/MyTeam/MyTeam.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/joinAsEmployee",
        element: <JoinAsEmployee></JoinAsEmployee>,
      },
      {
        path: "/joinAsHR",
        element: 
          <JoinAsHR></JoinAsHR>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
  {
    path: "/",
    element: <Navbar></Navbar>,
  },
  {
    path: "/footer",
    element: <Footer></Footer>,
  },
  {
    path: "/dashBoard",
    element: <DashBoard></DashBoard>,
    children:[
      {
        path: "/dashBoard/assetsList",
        element: <AssetsList></AssetsList>,
      },
      {
        path: "/dashBoard/addAnAsset",
        element: <AddAnAsset></AddAnAsset>,
      },
      {
        path: "/dashBoard/allRequests",
        element: <AllRequests></AllRequests>,
      },
      {
        path: "/dashBoard/myEmployeeList",
        element: <MyEmployeeList></MyEmployeeList>,
      },
      {
        path: "/dashBoard/addAnEmployee",
        element: <AddAnEmployee></AddAnEmployee>,
      },
      {
        path: "/dashBoard/myRequestedAssets",
        element: <MyRequestedAssets></MyRequestedAssets>,
      },
      {
        path: "/dashBoard/requestForAsset",
        element: <RequestForAsset></RequestForAsset>,
      },
      {
        path: "/dashBoard/myTeam",
        element: <MyTeam></MyTeam>,
      },
      {
        path: "/dashBoard/profile",
        element: <Profile></Profile>,
      },
    ]
  },
]);
