import { useQuery } from "@tanstack/react-query";
import useAxios from "../useAxios";


const useAssetsData = () => {

    const axiosHook = useAxios();

    const {data : productData} = useQuery({
        queryKey : ['productData'],
        queryFn : async ()=>{
            const res = await axiosHook.get('/products') 
            return res.data;
        } 
    })
    return [productData]
};

export default useAssetsData;