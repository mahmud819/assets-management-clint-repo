import axios from "axios";
import React from "react";

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    // baseURL: "https://assets-management-server-nine.vercel.app",
  });
  return axiosInstance;
};

export default useAxios;
