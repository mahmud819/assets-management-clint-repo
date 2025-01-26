import React from 'react';

const Modal = ({isOpen,onClose,children}) => {

    if(!isOpen)
        return null;

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>

           <div className='bg-white relative rounded-lg shadow-lg p-4 max-w-lg w-full h-2/5'>
            {children}
            <div className='p-4'>
                
            <button onClick={onClose} className='btn btn-primary absolute bottom-2 right-2 '>Close</button>
            </div>
            
            </div> 
        </div>
    );
};

export default Modal;