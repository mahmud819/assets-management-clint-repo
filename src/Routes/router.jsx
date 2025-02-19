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
import Paymant from "../Pages/HRPages/PaymentPage/Paymant";
import Error from "../Pages/Error/Error";
// import MyTeam from "../Pages/EmployeePages/MyTeam/MyTeam.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
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
    element:<PrivateRoute>

      <DashBoard></DashBoard>
    </PrivateRoute> ,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/dashBoard/",
        element: <PrivateRoute><AssetsList></AssetsList></PrivateRoute>,
      },
      {
        path: "/dashBoard/addAnAsset",
        element: <PrivateRoute><AddAnAsset></AddAnAsset></PrivateRoute>,
      },
      {
        path: "/dashBoard/allRequests",
        element: <PrivateRoute><AllRequests></AllRequests></PrivateRoute>,
      },
      {
        path: "/dashBoard/myEmployeeList",
        element: <PrivateRoute><MyEmployeeList></MyEmployeeList></PrivateRoute>,
      },
      {
        path: "/dashBoard/addAnEmployee",
        element: <PrivateRoute><AddAnEmployee></AddAnEmployee></PrivateRoute>,
      },
      {
        path: "/dashBoard/myRequestedAssets",
        element: <PrivateRoute><MyRequestedAssets></MyRequestedAssets></PrivateRoute>,
      },
      {
        path: "/dashBoard/requestForAsset",
        element: <PrivateRoute><RequestForAsset></RequestForAsset></PrivateRoute>,
      },
      {
        path: "/dashBoard/myTeam",
        element: <PrivateRoute><MyTeam></MyTeam></PrivateRoute>,
      },
      {
        path: "/dashBoard/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: "/dashBoard/payment",
        element: <PrivateRoute><Paymant></Paymant></PrivateRoute>,
      },
    ]
  },
]);
