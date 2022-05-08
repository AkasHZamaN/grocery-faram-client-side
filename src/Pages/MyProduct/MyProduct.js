import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { TrashIcon, UserIcon, MailOpenIcon, LocationMarkerIcon, PhoneIcon, PencilAltIcon, ClipboardListIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';
// import { useParams } from 'react-router-dom';

const MyProduct = () => {
    // const {id} = useParams();
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    useEffect(() => {

        const getOrders = async () =>{
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
    // https://i.postimg.cc/tRcg8s9V/grocery-farm.png

    const deleteItem = id =>{
        const proceed = toast('Product Successfully Deleted');
        if(proceed){
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                const remainingItem = orders.filter(order => order._id !== id);
                setOrders(remainingItem);
            });
        }
        // window.location.reload();
    }




    return (
        <div>
            <h4 style={{color:'#6A1B4D'}} className='text-center my-3'><ClipboardListIcon style={{height:'35px'}}                                                ></ClipboardListIcon> YOUR ORDER SUMMERY</h4>
            
            <div className='w-100 mx-auto row row-cols-1 row-cols-lg-2 g-3 my-3'>
                {
                    orders.map(order => <div
                    key={order._id} order={order}>
                        <div style={{fontFamily:'baloo2,cursive'}} className='d-flex justify-content-center align-items-center m-3 p-3 row row-cols-1 row-cols-lg-2'>
                            <div>
                                <img className='w-100 mx-auto rounded-3' src={order.photo} alt="" />
                            </div>
                            <div style={{color:'#6A1B4D'}}>
                            <p><small><PencilAltIcon style={{height:'20px'}}></PencilAltIcon>{order.id}</small></p>
                            <h6 className='fw-bold text-gray'><small className='text-uppercase fs-5'>{order.name}</small></h6>
                            <p className='fw-bold text-gray'>Quantity: <span className='text-success  fs-5'>{order.quantity}</span> <span className='text-gray'>/kg</span></p>
                            <p><UserIcon style={{height:'20px'}}></UserIcon> <small style={{color:'gray',fontWeight:'bold'}}>{order.displayName}</small></p>
                            <p><MailOpenIcon style={{height:'20px'}}></MailOpenIcon> <span className='text-danger'>{order.email}</span></p>
                            <p><LocationMarkerIcon style={{height:'20px'}}></LocationMarkerIcon> <small style={{color:'gray',fontWeight:'bold'}}>{order.address}</small></p>
                            <p><PhoneIcon style={{height:'20px'}}></PhoneIcon> <small style={{color:'gray',fontWeight:'bold'}}>{order.phone}</small></p>
                            <p className='w-100 py-1 text-center rounded-3'><TrashIcon onClick={()=>deleteItem(order._id)} style={{height:'30px', cursor:'pointer', color:'#6A1B4D',border:'1px solid #6A1B4D',padding:'2px 50px',borderRadius:'8px'}}></TrashIcon></p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyProduct;