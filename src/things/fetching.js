import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = () => {
    const [orders, setOrders] = useState([]);
    const [id, setId] =  useState(0);

    useEffect(() => {
        axios.get("https://pasd-webshop-api.onrender.com/api/order/")
            .then( res => {
                console.log(res);
                setOrders(res.data);
            })
            .catch( err => {
                console.log(err);
            })
    })

    return(

        <div className = 'APP'>
            <input type = 'text' value={id} onChange />
            <ul>
                {orders.map(order => (
                    <li key={order.id}>{order.send_date}</li>
                ))}
            </ul>
        </div>

    )
}

export default DataFetching;