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
            <h1>This is items Details: {id}</h1>
            <p>{products?.name}</p>
        </div>
    );
};

export default ItemDetails;