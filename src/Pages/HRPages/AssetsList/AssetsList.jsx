import React from 'react';
import DataFilterElement from '../../../SharedElement/DataFilerterElement/DataFilterElement';
import useAssetsData from '../../../SharedElement/Hooks/UseAssetsData/useAssetsData';

const AssetsList = () => {
    const [productData] = useAssetsData();
    console.log(productData);
    return (
        <div>
            <DataFilterElement></DataFilterElement>
            <div className='px-2'>
                <h1 className='text-3xl font-bold p-4'>Total Products :  </h1>
                <div>

                </div>
            </div>
        </div>
    );
};

export default AssetsList;