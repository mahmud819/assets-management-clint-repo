import React from "react";
import useRequestedData from "../../../SharedElement/Hooks/UseRequstedData/useRequestedData";
import AllRequestCard from "./AllRequestsCard/AllRequestCard";

const AllRequests = () => {

  const [requestedData] = useRequestedData();
  console.log(requestedData);
  return (
    <div className="py-4 px-6">
      <div className="w-3/5 mx-auto">
        <label className="input input-bordered  flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search by requested name or email" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="py-4">
        <h1 className="text-2xl font-bold ">Request List</h1>
        <div className="grid grid-col-1  bg-white rounded-lg p-2 md: grid-col-2 lg: grid-col-3">
            {requestedData?.map(data=><AllRequestCard data={data} key={data._id}></AllRequestCard>)}
        </div>
      </div>
    </div>
  );
};

export default AllRequests;
