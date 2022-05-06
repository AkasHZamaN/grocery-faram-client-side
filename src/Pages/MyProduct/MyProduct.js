import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { TrashIcon, UserIcon, InboxIcon, LocationMarkerIcon, PhoneIcon, PencilAltIcon } from '@heroicons/react/solid';
// import { useParams } from 'react-router-dom';

const MyProduct = () => {
    // const {id} = useParams();
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    useEffect(() => {

        const getOrders = async() =>{
            const email = user?.email;
            const url =`http://localhost:5000/order?email=${email}`;
            const {data} = await axios.get(url, {
                headers:{
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
           
            setOrders(data);
        }
        getOrders(); 

    },[user])

    return (
        <div>
            <h1>Your Orders: {orders.length}</h1>
            
            <div className='w-100 mx-auto row row-cols-1 row-cols-lg-2 g-3 my-3'>
                {
                    orders.map(order => <div
                    key={order._id} order={order}>
                        <div className='d-flex justify-content-center align-items-center m-3 p-3 row row-cols-1 row-cols-lg-2'>
                            <div>
                                <img className='w-100 mx-auto' src="https://i.postimg.cc/tRcg8s9V/grocery-farm.png" alt="" />
                            </div>
                            <div>
                            <p><small><PencilAltIcon style={{height:'20px'}}></PencilAltIcon>{order.id}</small></p>
                            <h6 className='fw-bold text-gray'>Product Name: <small className='text-success text-uppercase fs-5'>{order.name}</small></h6>
                            <p className='fw-bold text-gray'>Quantity: <span className='text-success  fs-5'>{order.quantity}</span> <span className='text-gray'>/kg</span></p>
                            <p><UserIcon style={{height:'25px'}}></UserIcon> <small className='text-success fw-bold'>{order.displayName}</small></p>
                            <p><InboxIcon style={{height:'25px'}}></InboxIcon> <span className='text-danger'>{order.email}</span></p>
                            <p><LocationMarkerIcon style={{height:'25px'}}></LocationMarkerIcon> <small className='text-success fw-bold'>{order.address}</small></p>
                            <p><PhoneIcon style={{height:'25px'}}></PhoneIcon> <small className='text-success fw-bold'>{order.phone}</small></p>
                            <p className='w-75 mx-auto py-1 text-center bg-success bg-opacity-10 rounded-3'><TrashIcon style={{height:'30px', cursor:'pointer', color:'#27a745'}} className='text-success'></TrashIcon></p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyProduct;