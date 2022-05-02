import React from 'react';
import {Button} from 'react-bootstrap';
import useProduct from '../../hooks/useProduct';
import MyInventoryDetails from './MyInventoryDetails';
import {useNavigate} from 'react-router-dom';


const MyInventory = () => {
    const [products] = useProduct();
    const navigate = useNavigate();

    const addNewItem = () =>{
        navigate(`/addProduct`);
    }

    return (
        <div>
            <div className='w-100 mx-auto row row-cols-1 row-cols-lg-3 g-4 my-3'>
                {
                    products.map(prodItem =><MyInventoryDetails key={prodItem._id} prodItem={prodItem}></MyInventoryDetails>)
                }
            </div>
            <div className="w-75 mx-auto text-center my-4">
            <Button onClick={addNewItem} variant="outline-success w-50">ADD PRODUCT</Button>
            </div>
        </div>
    );
};

export default MyInventory;