import React from 'react';
import {Button} from 'react-bootstrap';
import useProduct from '../../hooks/useProduct';
import MyInventoryDetails from '../MyInventory/MyInventoryDetails';
import {useNavigate} from 'react-router-dom';
import { HomeIcon, PlusSmIcon } from '@heroicons/react/solid';


const MyInventory = () => {
    const [products] = useProduct();
    const navigate = useNavigate();

    const addNewItem = () =>{
        navigate(`/addProduct`);
    }

    return (
        <div>
            <h5 style={{fontFamily:'baloo2,cursive', textTransform:'uppercase',marginLeft:'20px', marginTop:'35px',fontWeight:'bold',color:'#6A1B4D'}}><HomeIcon style={{height:'25px', color:'#6A1B4D'}}></HomeIcon> Grocery farm warehouse</h5>
            <div className='w-100 mx-auto row row-cols-1 row-cols-lg-3 g-4 my-3'>
                {
                    products.map(prodItem => <MyInventoryDetails key={prodItem._id} prodItem={prodItem}></MyInventoryDetails>)
                }
            </div>
            <div style={{fontFamily:'baloo2,cursive', color:'#6A1B4D'}} className=" text-end my-4">
            <Button onClick={addNewItem} style={{border:'1px solid #6A1B4D',color:'#6A1B4D'}} variant="white me-3
             fw-bold" >ADD PRODUCT<PlusSmIcon style={{height:'30px'}}></PlusSmIcon></Button>
            </div>
        </div>
    );
};

export default MyInventory;