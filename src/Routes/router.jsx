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
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <NormalHome></NormalHome>,
      },
      {
        path: "/joinAsEmployee",
        element: <JoinAsEmployee></JoinAsEmployee>,
      },
      {
        path: "/joinAsHR",
        element: <PrivateRoute>
          <JoinAsHR></JoinAsHR>,
        </PrivateRoute>
        
      },
      {
        path: "/test",
        element: <PrivateRoute>
          <JoinAsHR></JoinAsHR>,
        </PrivateRoute>
        
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
]);
