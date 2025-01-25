import React from 'react';
import DataFilterElement from '../../../SharedElement/DataFilerterElement/DataFilterElement';
import useAssetsData from '../../../SharedElement/Hooks/UseAssetsData/useAssetsData';
import { NavLink } from 'react-router-dom';

const RequestForAsset = () => {
    const [productData] = useAssetsData()
    return (
        <div>
            <div>
                <DataFilterElement></DataFilterElement>
            </div>
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
                    <th>Product Availability</th>
                    
                    
                  </tr>
                </thead>
                <tbody>
                  {productData?.map((data) => (
                    <tr>
                      <td>
                          <div className="font-bold">{data.productName} </div>
                      </td>
                      <td>{data.productType}</td>
                      <td>{data?.productQuantity == 0 ?'Out of Stack':'Avaivable'}</td>
                      
                      <th>
                        <div className="flex">
                          <button className="btn btn-ghost btn-xs">
                            Request for add
                          </button>
                          
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

export default RequestForAsset;