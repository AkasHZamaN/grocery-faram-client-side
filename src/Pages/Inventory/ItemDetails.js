import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/AkasHZamaN/red-onion-restuarent/main/public/products.json')
        .then(res => res.json())
        .then(data => {
            const productInfo = data?.find(item => item._id === parseInt(id)) 
            setProducts(productInfo);
        })
    },[id])

    return (
        <div>
            <div className='d-felx row row-cols-1 row-cols-lg-2 g-4'>
            <div>
                <img src={products.photo} alt="" />
            </div>
            <div>
                <h3>{products.name}</h3>
                <h5>{products.price} ৳</h5>
                <p>{products.quantity} {products.sold}</p>
                <p>{products.description}</p>

            </div>
            </div>
            {/* <h1>This is items Details: {id}</h1>
            <p>{products.name}</p> */}
        </div>
    );
};

export default ItemDetails;