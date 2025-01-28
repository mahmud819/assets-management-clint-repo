import React, { useState } from "react";
import DataFilterElement from "../../../SharedElement/DataFilerterElement/DataFilterElement";
import useAssetsData from "../../../SharedElement/Hooks/UseAssetsData/useAssetsData";
import { NavLink, useSearchParams } from "react-router-dom";
import Modal from "../../../SharedElement/Modal/Modal";
import useAxios from "../../../SharedElement/Hooks/useAxios";
import useUserInfo from "../../../SharedElement/Hooks/useUserInfo";
import Swal from "sweetalert2";

const RequestForAsset = () => {
  const userInfo = useUserInfo();
  const axiosHook = useAxios();
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({});
  const openModalWithData = (data) => {
    setModalOpen(true);
    // console.log("modal open function is working", data);
    setData(data);
  };
  const closeModal = () => setModalOpen(false);
  const [productData] = useAssetsData();

  const handleProdudctAdd = () => {
    const requestedDate = new Date().toLocaleDateString();
    const productInfo = {
      productId: data?._id,
      productName: data?.productName,
      productType: data?.productType,
      productQuantity: data?.productQuantity,
      productAddDate: data?.productAddTime,
      userName: userInfo?.name,
      userEmail: userInfo?.email,
      userRole: userInfo?.role,
      userMdbId: userInfo?._id,
      requestedDate,
    };
    // console.log(data,userInfo,productInfo)
    axiosHook
      .post("/requestedProducts", productInfo)
      .then((res) => {
        Swal.fire({
          title: "Well!",
          text: "Product request successful",
          icon: "success",
        });
        closeModal();
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error, error.message);
      });
    // console.log('this product request is working',productInfo);
  };
  return (
    <div>
      <div>
        <DataFilterElement searchBy={'Search by Product Name'}></DataFilterElement>
      </div>
      <div className="p-4 bg-white rounded-xl mx-2">
        <h1 className="text-xl font-bold p-4">
          Total Assets : {productData?.length}
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
                      <td>
                        {data?.productQuantity == 0
                          ? "Out of Stack"
                          : "Avaivable"}
                      </td>

                      <th>
                        <div className="flex">
                          <button
                            onClick={() => openModalWithData(data)}
                            className="btn btn-outline btn-primary  btn-sm"
                          >
                            Request for add
                          </button>
                        </div>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Open the modal*/}
              <Modal isOpen={modalOpen} onClose={closeModal}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Any Opinion </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Any Opinion Type Here"
                    className="input input-bordered"
                    required
                  />
                </div>
                <button
                  onClick={handleProdudctAdd}
                  className="btn btn-primary absolute bottom-2 right-24"
                >
                  Request for product
                </button>
              </Modal>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestForAsset;
