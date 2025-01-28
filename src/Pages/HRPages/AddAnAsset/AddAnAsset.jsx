import React from "react";
import useAxios from "../../../SharedElement/Hooks/useAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddAnAsset = () => {
  const axioshook = useAxios();
  const navigate = useNavigate();

  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const productName = form.productName.value.toLowerCase();
    const productType = form.productType.value.toLowerCase();
    const productQuantity = parseInt(Math.floor(form.productQuantity.value));
    const productAddTime = new Date().toLocaleDateString();
    const productAddData = {
      productName,
      productType,
      productQuantity,
      productAddTime,
    };
    // console.log('product is added sucess',productData);
    axioshook.post("/products", productAddData).then((res) => {
      console.log(res.data);
      
        Swal.fire({
            title: "Well!",
            text: "Product add successful",
            icon: "success",
          });
      }
      
    );
    navigate('/dashBoard/assetsList');
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-col">
          <div>
            <h1 className="text-4xl font-bold text-center p-4">Add Products</h1>
          </div>
          <div className="card bg-base-100 w-[150%] max-w-lg shrink-0 shadow-2xl">
            <form onSubmit={handleAddProduct} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Type</span>
                </label>
                <select
                  name="productType"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled>Select One</option>
                  <option>Returnable</option>
                  <option>Non-Returnable</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Quantity</span>
                </label>
                <input
                  type="text"
                  name="productQuantity"
                  placeholder="Product Quantity"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAnAsset;
