import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../SharedElement/Hooks/useAxios";
import { NavLink } from "react-router-dom";

const MyRequestedAssets = () => {
  const axiosHook = useAxios();
  const { data: requestedProduct } = useQuery({
    queryKey: ["requestedProduct"],
    queryFn: async () => {
      const res = await axiosHook.get("/requestedProducts");
      return res.data;
    },
  });
  console.log(requestedProduct);
  return (
    <div>
      <div className="flex justify-evenly pt-6">
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
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

        <div>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Filter Products
            </option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Returnable</option>
            <option>Non Returnable</option>
          </select>
        </div>
      </div>
      <div className="p-4 bg-white rounded-xl mt-4 mx-4">
        <h1 className="text-xl font-bold p-4">
          Total Products : {requestedProduct?.length}
        </h1>
        <div>
          {requestedProduct?.length == 0 ? (
            <div className="flex justify-center items-center min-h-screen">
              <h1 className="text-4xl font-bold text-center my-4">
                Data Not Found
              </h1>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-lg font-bold text-black">
                    <th>Product Name</th>
                    <th>Product Type</th>
                    <th>Product Quality</th>
                    <th>Added Date</th>
                    <th>Delete/Update</th>
                  </tr>
                </thead>
                <tbody>
                  {requestedProduct?.map((data) => (
                    <tr>
                      <td>
                        <div>
                          <div className="font-bold">{data.productName} </div>
                        </div>
                      </td>
                      <td>{data.productType}</td>
                      <td>{data.productQuantity}</td>
                      <td>{data.productAddTime}</td>
                      <th>
                        <div className="flex">
                          <button className="btn btn-ghost btn-xs">
                            Delete
                          </button>
                          <NavLink to={`/updateMyPost/${data._id}`}>
                            <button className="btn btn-ghost btn-xs ml-2 ">
                              Update
                            </button>
                          </NavLink>
                        </div>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyRequestedAssets;
