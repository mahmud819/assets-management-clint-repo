import React, { useState } from "react";
import DataFilterElement from "../../../SharedElement/DataFilerterElement/DataFilterElement";
import useAssetsData from "../../../SharedElement/Hooks/UseAssetsData/useAssetsData";
import { NavLink } from "react-router-dom";

const AssetsList = () => {
  const [productData] = useAssetsData();
  const [productsData,setProductsData] = useState(productData)
  console.log(productsData);
  // console.log(productData,productData?.length);
  return (
    <div>
      <DataFilterElement key={indexedDB} searchBy={'Search by Item Name'} productsData={productsData} setProductsData = {setProductsData} button={"Sort by Quantity"}></DataFilterElement>
      <div className="p-4 bg-white rounded-xl mx-2">
        <h1 className="text-xl font-bold p-4">
          Total Products : {productData?.length}
        </h1>
        <div>
          {productData?.length == 0 ? (
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
                  {productsData?.map((data) => (
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

export default AssetsList;
