import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';

const Error = () => {

    const error = useRouteError();
    // console.log(error);
    return (
        <div className='flex flex-col  justify-center items-center '>
            <div className='flex flex-col mt-[10%]'>
              <h1 className='text-6xl font-bold text-center'>Oops!</h1>
              <p className='text-4xl font-bold my-2 text-center mt-4'>{error?.status}</p> 
              <p className='text-4xl font-bold my-2 text-center'>{error?.statusText} </p>
              <p>{error?.message} </p>
              <NavLink to='/' className='btn mt-2 btn-error'>Go To Home</NavLink>
            </div>
           
        </div>
    );
};


export default Error;