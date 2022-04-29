import React from 'react';
import useProduct from '../../hooks/useProduct';
import InventoryItem from './InventoryItem';

const Inventory = () => {
    const [products, setProducts] = useProduct();
    return (
        <div className=''>
            <div className='w-100 mx-auto row row-cols-1 row-cols-lg-3 g-4'>
                {
                    products.map(item =><InventoryItem key={item.id} item={item}></InventoryItem>)
                }
            </div>
        </div>
    );
};

export default Inventory;