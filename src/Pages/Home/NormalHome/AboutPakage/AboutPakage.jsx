import React from "react";

const AboutPakage = () => {
  return (
    <div className="bg-blue-100 py-4">
      <h1 className="font-bold text-3xl text-center">Our Pakages</h1>
      <div className="flex flex-col justify-evenly px-4 py-8  gap-2 lg:flex lg:flex-row">
        <div className="w-full card bg-blue-300 text-black lg:w-1/3">
          <div className="card-body">
            <h2 className="card-title">For 5 Employee!</h2>
            <p>Maximum 5 employees $5</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className=" w-full card bg-blue-300 text-black lg:w-1/3">
          <div className="card-body">
            <h2 className="card-title">For 10 Employee!</h2>
            <p>Maximum 10 employees $8</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className=" w-full card bg-blue-300 text-black lg:w-1/3">
          <div className="card-body">
            <h2 className="card-title">For 20 Employee!</h2>
            <p>Maximum 20 employees $15</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPakage;
