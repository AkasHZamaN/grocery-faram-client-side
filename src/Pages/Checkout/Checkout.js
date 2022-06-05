import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const {id}= useParams();
    const [productView] = useProductDetails(id);
    const [user] = useAuthState(auth);

    // send order data in the database
    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            displayName: user.displayName,
            email: user.email,
            photo: productView.photo,
            name: productView.name,
            quantity: parseInt(event.target.quantity.value),
            id: id,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://cryptic-bastion-13696.herokuapp.com/order', order)
        .then(response =>{
            console.log(response);
            const {data} = response;
            if(data.insertedId){
                toast('Your Order is Placed. Thanks for Shopping with us !!');
                event.target.reset();
            }
        })
    }

    return (
        <div>
            <div className='pb-3'>
            <h4 className='w-75 mx-auto my-4'>ORDER ID: {id}</h4>
                <form onSubmit={handlePlaceOrder}>
                    <input style={{border:'1px solid #28a745',borderRadius:'5px'}} className='d-flex flex-column mb-2 px-3 py-2 w-75 mx-auto' type="text" name="displayName" id="displayName" defaultValue={user?.displayName} placeholder='Your Name' readOnly required/>

                    <input style={{border:'1px solid #28a745',borderRadius:'5px'}} className='d-flex flex-column mb-2 px-3 py-2 w-75 mx-auto' type="text" name="email" id="email" defaultValue={user?.email} placeholder='Your Email' readOnly  required/>

                    <input style={{border:'1px solid #28a745',borderRadius:'5px'}} className='d-flex flex-column mb-2 px-3 py-2 w-75 mx-auto' type="text" name="photo" id="photo" defaultValue={productView.photo} placeholder='Your Product Photo URL' readOnly  required/>

                    <input style={{border:'1px solid #28a745',borderRadius:'5px'}} className='d-flex flex-column mb-2 px-3 py-2 w-75 mx-auto' type="text" name="name" id="name" defaultValue={productView.name} placeholder='Your Product' readOnly  required/>


                    <input style={{border:'1px solid #28a745',borderRadius:'5px'}} className='d-flex flex-column mb-2 px-3 py-2 w-75 mx-auto' type="text" name="quantity" id="quantity" placeholder='Product Quantity' required/>     

                    <input style={{border:'1px solid #28a745',borderRadius:'5px'}} className='d-flex flex-column mb-2 px-3 py-2 w-75 mx-auto' type="text" name="address" id="address" placeholder='Your Address'  required/>
                    <input style={{border:'1px solid #28a745',borderRadius:'5px'}} className='d-flex flex-column mb-2 px-3 py-2 w-75 mx-auto' type="text" name="phone" id="phone" placeholder='Your Phone Number'  required/>
                    <div className='w-75 border mx-auto'>
                    <Button className='w-100 border-2 fw-bold' variant="outline-success" as="input" type="submit" value="PLACE ORDER" />{' '}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;