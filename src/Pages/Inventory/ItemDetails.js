import React, { useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/solid';





const ItemDetails = () => {
    const {id} = useParams();
    const [productView, setProductView] = useState({});
    const navigate = useNavigate();

    

    useEffect(()=>{
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setProductView(data);
        })
    },[id])


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

    const getInventory = () =>{
        navigate('/inventory')
        // navigate('/myInventory')
    }

    return (
        <div>
            <div className='container w-100 mx-auto my-5 d-felx row row-cols-1 row-cols-lg-2 g-4'>
                <div>
                    <img style={{height:'300px'}} className='w-100 mx-auto rounded-3' src={productView?.photo} alt="" />
                    <div className='w-75 mx-auto my-5'>
                    <Button className='w-100 my-2' variant="outline-success px-3">ADD TO CART</Button>
                    </div>
                </div>
                <div>
                    <h3>{productView.name}</h3>

                    <p>
                        <span><StarIcon style={{height:'18px', color:' #28a745'}}></StarIcon></span>
                        <span><StarIcon style={{height:'18px', color:' #28a745'}}></StarIcon></span>
                        <span><StarIcon style={{height:'18px', color:' #28a745'}}></StarIcon></span>
                        <span><StarIcon style={{height:'18px', color:'gray'}}></StarIcon></span>
                        <span><StarIcon style={{height:'18px', color:'gray'}}></StarIcon></span>
                    </p>
                
                    <h5>Price: {productView.price} ৳</h5>
                    <p>Available: {productView.quantity} <span style={{border:'2px solid goldenrod', borderRadius:'5px', padding:'0 5px' }}> {productView.available}</span></p>
                    <p>{productView.description}</p>

                    <p>Product Id:<small className='bg-success bg-opacity-10 rounded-3 px-1 ms-1 text-success'>{productView._id}</small></p>
                    <p>Suplier Name:<small className='bg-success bg-opacity-10 rounded-3 px-1 ms-1 text-success'> {productView.dealer}</small></p>

                    <div className='w-100 mx-auto d-flex row row-cols-2 row-cols-lg-2 g-4 my-5'>
                        <div className='d-flex'>
                            <button style={{border:'1px solid  #28a745', borderRadius:'5px', padding:'0 10px',}} onClick={countMinus}  >-</button>
                            <input style={{width:'60px', border:'1px solid  #28a745', borderRadius:'5px', margin:'0 5px', textAlign:'center'}} type="text" name="number" id="number" defaultValue="1"/>
                            <button onClick={countPlus} style={{border:'1px solid  #28a745', borderRadius:'5px', padding:'0 10px',}}>+</button>
                        </div>
                        <div>
                        <Button variant="outline-success px-3">DELEVERD</Button>
                        </div>
                    </div>
                </div>
            </div>
           <div className='w-50 mx-auto'>
           <Button onClick={getInventory} variant="outline-success w-100 rounded-3">GET MORE PRODUCT</Button>
           </div>
            
        </div>
    );
};

export default ItemDetails;