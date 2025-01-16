import React, { useState } from "react";
import Lottie from "lottie-react";
import HRLottie from "../../assets//Lottie/adminAnamition/admin.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const JoinAsHR = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={HRLottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl text-center font-bold pt-4">Join as HR</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                className="input input-bordered"
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
                className="input input-bordered"
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
                className="input input-bordered"
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
                name="logo"
                className="input input-bordered"
                required
              />
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
              <label className="label">
                <span className="label-text">Select Pakage</span>
              </label>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Select one Pakage
                </option>
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
                className="input input-bordered"
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
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinAsHR;
