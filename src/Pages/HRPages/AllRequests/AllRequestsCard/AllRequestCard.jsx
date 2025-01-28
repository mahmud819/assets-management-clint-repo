import React from "react";
import useAxios from "../../../../SharedElement/Hooks/useAxios";
import Swal from "sweetalert2";

const AllRequestCard = ({ data }) => {

  const axiosHook = useAxios();

    const handleRequestStatus =(id)=>{

      const requestedProducts = {...data, approveStatus: 'approved'}
      axiosHook.patch(`/requestedProducts/${id}`,requestedProducts)
      .then(res=>{
        console.log(res.data)
        Swal.fire({
                  title: "Well!",
                  text: "This product is approved",
                  icon: "success",
                });
      })
      .catch(err=>{
        console.log(err, err.message);
      })
        console.log('request status',id)
    }
  // console.log(data);
  return (
    <div>
      <div className="card bg-neutral text-neutral-content w-60% lg:w-full">
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
            <button onClick={()=>handleRequestStatus(data._id)} className="btn btn-primary ">Approve</button>
            <button className="btn btn-primary">Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRequestCard;
