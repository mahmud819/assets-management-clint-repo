import React, { useRef } from "react";
import useAxios from "../Hooks/useAxios";

const DataFilterElement = ({button,productsData,setProductsData,searchBy}) => {
  
  const inputRef = useRef();
  const axiosHook = useAxios();

  const handleSearch =()=>{
    const inputValue = inputRef.current.value.toLowerCase();

    axiosHook.get(`/products?productName=inputValue`)
    .then(res=>{
      console.log(res.data)
      setProductsData(res.data);
    })
    .catch(err=>{
      console.log(err,err.message)
    })
    // console.log('handle search is working','input value',inputRef.current.value,);
  }
  return (
    <div className="p-6">
      <div className="flex justify-evenly">
        <div className="flex ">
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <input ref={inputRef} type="text" className="grow" placeholder={searchBy} />
              <svg onClick={handleSearch}
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
        </div>
        <div>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled >
              Filter Product
            </option>
            <option>Available</option>
            <option>Out of Stock</option>
            <option>Returnable</option>
            <option>Non Returnable</option>
          </select>
        </div>
        {button&&<div>
          <button className="btn btn-primary">{button}</button>
        </div>}
      </div>
    </div>
  );
};

export default DataFilterElement;
