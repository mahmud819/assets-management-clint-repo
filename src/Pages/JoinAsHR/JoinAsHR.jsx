import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import HRLottie from "../../assets//Lottie/adminAnamition/admin.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxios from "../../SharedElement/Hooks/useAxios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const JoinAsHR = () => {
  const [startDate, setStartDate] = useState(new Date());
  const axiosHook = useAxios();
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const naviGate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fullName.value;
    const companyName = form.companyName.value;
    const profilePhoto = form.profilePhoto.value;
    const companyLogo = form.companyLogo.value;
    const birthDay = startDate;
    const email = form.email.value;
    const pakage = form.pakage.value;
    const password = form.password.value;
    const role = "hr";
    const formData = {
      name,
      companyName,
      email,
      role,
      profilePhoto,
      companyLogo,
      birthDay,
      pakage,
    };
    console.log("function is working", formData);
    createUser(email, password)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Welcome!",
          text: "Your are successfuly join as an HR",
          icon: "success",
        });
        axiosHook
          .post("/users", formData)
          .then((res) => {
            console.log(res.data);
            alert("user is created");
          })
          .catch((err) => {
            console.log(err.message, err);
          });
      })
      .catch((error) => {
        console.log(error, error.message);
      });
    naviGate("/dashBoard/payment");
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
        naviGate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <div className="p-2  bg-base-200 min-h-screen lg:p-4">
      <div className="flex flex-col justify-center items-center lg:flex-row-reverse">
        <div className="w-full text-center lg:text-left lg:w-[40%]">
          <Lottie animationData={HRLottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl lg:w-[70%]">
          <h1 className="text-3xl text-center font-bold pt-4">Join as HR</h1>
          <button
            onClick={handleSignInGoogle}
            className="w-[80%] mx-auto btn mt-2 btn-sm"
          >
            Login With Google
          </button>
          <h1 className="pt-2 font-bold text-xl text-center">Or</h1>
          <form onSubmit={handleSignup} className="px-4 py-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  className="input input-bordered input-sm"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  name="companyName"
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
                  name="profilePhoto"
                  className="input input-bordered input-sm"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Logo</span>
                </label>
                <input
                  type="text"
                  placeholder="Company Logo"
                  name="companyLogo"
                  className="input input-bordered input-sm"
                  required
                />
              </div>
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Date of Birth</span>
                </label>
                <DatePicker
                  showIcon
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-[90%]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select Pakage</span>
                </label>
                <select
                  name="pakage"
                  className="select select-bordered w-full select-sm"
                >
                  <option>Select one Pakage</option>
                  <option>5 Members for $5</option>
                  <option>10 Members for $8</option>
                  <option>20 Members for $15</option>
                </select>
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

            <div className="form-control mt-4">
              <button className="btn btn-primary btn-sm">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinAsHR;
