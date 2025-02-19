import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import lottieData from "../../assets/Lottie/register.json";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
// import useAxiosHooks from "../Hooks/useAxiosHooks";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxios from "../../SharedElement/Hooks/useAxios";

const JoinAsEmployee = () => {
  const naviGate = useNavigate();
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const axiosHook = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const [startDate, setStartDate] = useState(new Date());
  // console.log(createUser);
  const handleJoinAsEmployee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const profilePhoto = form.photo.value;
    const password = form.password.value;
    const role = "employee";
    const birthDay = startDate;
    const userData = { name, email, profilePhoto, role, birthDay };
    console.log(userData);
    createUser(email, password)
      .then((res) => {
        // console.log(res);
        Swal.fire({
          title: "Welcome!",
          text: "Your are successfuly join as an Employee",
          icon: "success",
        });
        axiosHook
          .post("/users", userData)
          .then((res) => {
            // console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
    naviGate("/login");
  };
  const handleSignInGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result);
        if (result.operationType == "signIn") {
          Swal.fire({
            title: "Welcome!,Welcome!",
            text: "Login in with Google Successfuly",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <div className="bg-base-200  min-h-screen">
      <div className="flex p-2 justify-center items-center flex-col lg:flex-row-reverse">
        <div className="w-[40%] text-center lg:text-left">
          <Lottie animationData={lottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-[70%] max-w-lg shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold text-center pt-4">
            Join As Employee
          </h1>
          <button
            onClick={handleSignInGoogle}
            className="w-[80%] mx-auto btn mt-2"
          >
            Login With Google
          </button>
          <h1 className="pt-2 font-bold text-xl text-center">Or</h1>
          <form
            onSubmit={handleJoinAsEmployee}
            className="p-4 "
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered input-sm"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered input-sm"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered input-sm"
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered input-sm"
                  required
                />
              </div>
              
            </div>
            <div className="w-full form-control">
                <label className="label">
                  <span className="label-text">Date of Birth</span>
                </label>
                <DatePicker
                  showIcon
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            <div className="form-control">
                <button className="btn btn-primary btn-sm">SignUp</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinAsEmployee;
