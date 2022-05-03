import React, { useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
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

    const getInventory = () =>{
        navigate('/inventory');
    }

    const changeQuantity = (event) => {
        console.log(event.target.value);
        const {quantity, ...rest} = productView;
        const newQuantity = event.target.value;
        const getNewQuantity = {quantity: newQuantity, ...rest};
        console.log(getNewQuantity);
        setProductView(getNewQuantity);
        
    }

    return (
        <div>
            <div className='container w-100 mx-auto my-5 d-felx row row-cols-1 row-cols-lg-2 g-4'>
                <div>
                    <img style={{height:'300px'}} className='w-100 mx-auto rounded-3' src={productView.photo} alt="" />
                    <div className='w-75 mx-auto my-5'>
                    <Link to={'/myProduct'}>
                    <Button className='w-100 my-2' variant="outline-success px-3">ADD TO CART</Button></Link>
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

                    <div className='d-flex align-items-center'>
                    <p className='mt-3' id="quantity">{productView.quantity}</p>
                    <small style={{border:'2px solid #27a745', borderRadius:'5px', padding:'0 10px', margin:'0 5px' }}> {productView.available}</small>
                    </div>

                    <p>{productView.description}</p>

                    <p>Product Id:<small className='bg-success bg-opacity-10 rounded-3 px-1 ms-1 text-success'>{productView._id}</small></p>
                    <p>Suplier Name:<small className='bg-success bg-opacity-10 rounded-3 px-1 ms-1 text-success'> {productView.dealer}</small></p>

                    <div className='w-100 mx-auto d-flex row row-cols-2 row-cols-lg-2 g-4 my-5 '>

                    <form>
                        <input onChange={changeQuantity} style={{width:'90px', border:'1px solid  #28a745', borderRadius:'5px', textAlign:'center',paddingBottom:'7px',marginBottom:'10px',marginRight:'5px'}} value={productView.quantity} type="number" name="number" id="" />
                        {/* <input className='border-0 bg-success text-white rounded-3' type="submit" name="submit" id=""/> */}
                        <Button className='border-0 bg-success text-white rounded-3 pt-1' as="input" type="submit" value="RE STOCK" />{' '}
                    </form>

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