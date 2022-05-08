import { CollectionIcon, DuplicateIcon } from '@heroicons/react/solid';
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
        <div style={{backgroundImage:"url('https://i.postimg.cc/65sRGkb3/add-banner-4.png')"}}>
            <h4 style={{fontFamily:'baloo2, cursive',color:'#6A1B4D'}} className="text-center my-5 text-uppercase fw-bold"><CollectionIcon style={{height:'35px'}}></CollectionIcon> Fresh & organic foods collection</h4>
            <div className='w-100 mx-auto row row-cols-1 row-cols-lg-3 g-4'>
                {
                    products.map(item =><InventoryItem key={item._id} item={item}></InventoryItem>)
                }
            </div>
            <div className='w-100 text-end'>
           <Button style={{fontFamily:'baloo2, cursive',backgroundColor:'white',border:'1px solid #6A1B4D',fontWeight:'normal', color:'#6A1B4D',margin:'0 20px'}} onClick={getManageInventory}><DuplicateIcon style={{height:'25px'}}></DuplicateIcon> MANAGE PRODUCT</Button>
           </div>
           <div className="mx-2 py-3">
            <img style={{height:'450px'}} className="w-100 my-3 rounded-3" src="https://i.postimg.cc/0yh53KXn/sale.png" alt="" />
           </div>
        </div>
    );
};

export default Inventory;