import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import InventoryItem from './InventoryItem';

const Inventory = () => {
    const [products] = useProduct();
    const navigate = useNavigate();

    const getManageInventory = () =>{
        navigate('/myInventory');
    }

    return (
        <div>
            <h3 className='text-center my-3 text-success'>Items are available in Grocery Farm wearhouse</h3>
            <div className='w-100 mx-auto row row-cols-1 row-cols-lg-3 g-4'>
                {
                    products.map(item =><InventoryItem key={item._id} item={item}></InventoryItem>)
                }
            </div>
            <div className='w-50 mx-auto border'>
           <Button onClick={getManageInventory} variant="outline-success w-100 rounded-3">UPDATE PRODUCT</Button>
           </div>
        </div>
    );
};

export default Inventory;