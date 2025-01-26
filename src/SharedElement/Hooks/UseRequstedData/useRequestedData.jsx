import { useQuery } from "@tanstack/react-query";
import useAxios from '../useAxios';

const useRequestedData = () => {
    
    const axiosHook = useAxios();

    const {data : requestedProductData} = useQuery({
        queryKey : ['productData'],
        queryFn : async ()=>{
            const res = await axiosHook.get('/requestedProducts') 
            return res.data;
        } 
    })
    return [requestedProductData]
};

export default useRequestedData;