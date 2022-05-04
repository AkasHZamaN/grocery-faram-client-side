import React from 'react';
import { TrashIcon } from '@heroicons/react/solid';
import useProduct from '../../hooks/useProduct';

const MyInventoryDetails = ({prodItem}) => {
    const [products, setProducts] = useProduct();
    const {_id, name, price, quantity, photo, available, dealer} = prodItem;

    const deleteItem = id =>{
        const proceed = window.confirm('WARNING!! Are You Sure?');
        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                const remainingItem = products.filter(prod => prod._id !== id);
                setProducts(remainingItem);
            });
        }
        window.location.reload();
    }

    return (
        <div>
             <div className='d-flex justify-content-between align-items-center  rounded-3 px-3 py-2 border'>
               <div>
                   <img style={{height:'100px',borderRadius:'10px'}} className="w-75 mx-auto" src={photo} alt="" />
               </div>
               <div className='w-75'>
                   <h4 className='text-success'>{name}</h4>
                   <h5 className=''>Price: {price} ৳</h5>
                   <p>{quantity} <span style={{border:'1px solid #28a745',borderRadius:'5px', padding:'0 5px',marginLeft:'4px', color:'#28a745'}}>{available}</span></p>
                   <small className='bg-light bg-opacity-70 px-2 rounded-3'>{dealer}</small>
               </div>
               <div>
                    <TrashIcon onClick={()=>deleteItem(_id)} style={{height:'30px', cursor:'pointer', color:'#27a745'}}></TrashIcon>
               </div>
           </div>
        </div>
    );
};

export default MyInventoryDetails;