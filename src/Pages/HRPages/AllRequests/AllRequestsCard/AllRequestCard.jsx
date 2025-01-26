import React from "react";

const AllRequestCard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body">
          <h2 className="text-md fond-bold text-left">Product Name : {data?.productName} </h2>
          <h2 className="text-md fond-bold text-left">Product Type : {data?.productType} </h2>
          <h2 className="text-md fond-bold text-left">Product Quantity : {data?.productQuantity}</h2>
          <h2 className="text-md fond-bold text-left">Product Add Date : {data?.productAddDate}</h2>
          <h2 className="text-md fond-bold text-left">Requested  Date : {data?.requestedDate}</h2>
          <h2 className="text-md fond-bold text-left">Requested by : {data?.userName}</h2>
          <h2 className="text-md fond-bold text-left">Requester email : {data?.userEmail}</h2>
          <h2 className="text-md fond-bold text-left">Requester Status : {data?.userRole}</h2>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Approve</button>
            <button className="btn btn-primary">Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRequestCard;
