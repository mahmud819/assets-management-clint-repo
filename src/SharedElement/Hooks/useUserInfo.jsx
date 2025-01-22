import React, { useContext, useEffect, useState } from 'react';
import useAxios from './useAxios';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const useUserInfo = () => {
    const {user,setLoading} = useContext(AuthContext)
    const  axiosHook = useAxios();
    const [loginUser,setLoginUser]=useState();
    useEffect(()=>{
      setLoading(true);
      axiosHook.get('/users')
      .then(res=>{
        // console.log(res.data);
        const data = res?.data.find(d=>d?.email==user?.email);
        // console.log(data);
        setLoginUser(data);
      })
      .catch(err=>{
        console.log(err,err?.message)
      })
      setLoading(false);
  
    },[user?.email])
    
    return loginUser;
};

export default useUserInfo;