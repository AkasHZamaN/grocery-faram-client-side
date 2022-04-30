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

    // const updateCount = (isIncrease) =>{
    //     const num = document.getElementById('number');
    //     const numberValue = num.value;
    //     if(isIncrease){
    //         num.value = parseInt(numberValue) + 1;
    //     }
    //     else if(numberValue > 0){
    //         num.value = parseInt(numberValue) - 1;
    //     }
    // }
    const countPlus = () => {
        const count = document.getElementById('number'); 
        const number = count.value; 
        if( !isNaN( number )) 
        {
            count.value++;
        }
        return false;
    }
    const countMinus = () => {
        const count = document.getElementById('number'); 
        const number = count.value; 
        if( !isNaN( number ) && number > 0) 
        {
            count.value--;
        }
        return false;
    }

    return (
        <div>
            <div className='container w-100 mx-auto my-5 d-felx row row-cols-1 row-cols-lg-2 g-4'>
            <div>
                <img style={{height:'300px'}} className='w-100 mx-auto rounded-3' src={products.photo} alt="" />
            </div>
            <div>
                <h3>{products.name}</h3>
                <h5>{products.price} ৳</h5>
                <p>{products.quantity} <span style={{border:'2px solid goldenrod', borderRadius:'5px', padding:'0 5px' }}> {products.available}</span></p>
                <p>{products.description}</p>

                <div className='d-flex'>
                    <button style={{border:'2px solid goldenrod', borderRadius:'5px', padding:'0 10px',}} onClick={countMinus}  >-</button>
                    <input style={{width:'60px', border:'2px solid goldenrod', borderRadius:'5px', margin:'0 5px'}} type="text" name="number" id="number" defaultValue="1"/>
                    <button onClick={countPlus} style={{border:'2px solid goldenrod', borderRadius:'5px', padding:'0 10px',}}>+</button>
                </div>

            </div>
            </div>
            {/* <h1>This is items Details: {id}</h1>
            <p>{products.name}</p> */}
        </div>
    );
};

export default ItemDetails;