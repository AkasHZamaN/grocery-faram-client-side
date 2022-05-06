import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProduct = () => {
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
        </div>
    );
};

export default MyProduct;