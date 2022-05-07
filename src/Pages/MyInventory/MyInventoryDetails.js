import React from 'react';
import { CheckCircleIcon, ShoppingCartIcon, TrashIcon } from '@heroicons/react/solid';
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
                   <h5 style={{fontFamily:'baloo2, cursive',color:'#6A1B4D',textTransform:'uppercase',fontWeight:'bold'}}>{name}</h5>
                   <h6 style={{fontFamily:'baloo2, cursive',color:'#6A1B4D',fontWeight:'bold'}}>Price: {price} ৳</h6>
                    <div style={{fontFamily:'baloo2, cursive',color:'#6A1B4d'}} className="d-flex align-items-center">
                        <h6 style={{fontFamily:'baloo2, cursive',fontWeight:'bold'}}>{quantity}</h6>
                        <small className="text-gray fw-bold mx-2">/kg</small>
                        <span style={{border:'1px solid #6A1B4D', borderRadius:'5px', padding:'0 5px',display:'inline-flex',alignItems:'center'}}><CheckCircleIcon style={{height:'16px',marginRight:'2px',color:'#6A1B4D'}}></CheckCircleIcon> {available}</span>
                    </div>
                   <small style={{fontFamily:'baloo2,cursive',color:'#6A1B4D'}} className='bg-light bg-opacity-70 px-2 rounded-3'><ShoppingCartIcon style={{height:'15px'}}></ShoppingCartIcon> {dealer}</small>
               </div>
               <div>
                    <TrashIcon onClick={()=>deleteItem(_id)} style={{height:'30px', cursor:'pointer', color:'#6A1B4D'}}></TrashIcon>
               </div>
           </div>
        </div>
    );
};

export default MyInventoryDetails;