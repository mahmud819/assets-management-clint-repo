import React from "react";
import useAxios from "../../../../SharedElement/Hooks/useAxios";
import Swal from "sweetalert2";

const AllRequestCard = ({ data }) => {

  const axiosHook = useAxios();

    const handleRequestStatus =(id)=>{

      // const requestedProducts = {...data, approveStatus: 'approved'}
      Swal.fire({
        title: "Are you sure to aprove this product?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, approve it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosHook.patch(`/requestedProducts/${id}`)
          .then(res=>{
            if(res.data.modifiedCount){
              Swal.fire({
                title: "Well!",
                text: "This product is approved.",
                icon: "success"
              });
            }
            console.log(res.data.modifiedCount)
          })
          .catch(err=>{
            console.log(err, err.message);
          })
          
        }
      });
    }
  // console.log(data);
  return (
    <div>
      <div className="card bg-white  w-60% lg:w-full">
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
