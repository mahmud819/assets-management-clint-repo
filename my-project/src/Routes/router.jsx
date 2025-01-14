import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import Home from "../Pages/Home/Home/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    },
    {
      path: "/",
      element: <Navbar></Navbar>
    },
    {
      path: "/",
      element: <Footer></Footer>
    },
  ]);