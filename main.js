// import fetch from "node-fetch";
const apiUrl = 'https://pasd-webshop-api.onrender.com/';
const apiKey = "6SnJbnFntiR7KVnAfnz5";
const apiOrder = apiUrl + "api/order/";
const apiDelivery = apiUrl + "api/delivery/"
const express = require('express')
const cors = require('cors');
const { response } = require('express');
// const { createServer } = require('http');
const app = express()

app.use(cors())

// const server = createServer( (req, res) => {
    async function show() {
        let result = await fetch(apiOrder, {
            method: 'GET',
            headers: {
                'Content-type': "application/json;charset-UTF=8",
                'x-api-key': apiKey,
                // 'accept': application/json,
            }
        })
        let r =  await result.json();
        console.log(r);
    
    
        let tab =
            `<tr>
              <th>ID</th>
              <th>Ship To City</th>
              <th>Ship To Address</th>
              <th>Send Date</th>
             </tr>`;
        
        for (let i = 0; i < r.orders.length; i++) {
            tab += `<tr> 
        <td>${r.orders[i].id}</tb>
        <td>${r.orders[i].sender_info.city}</td> 
        <td>${r.orders[i].receiver_info.street_and_number}</td> 
        <td>${r.orders[i].send_date} </td>
        </tr>`;
        }
        document.getElementById("orders").innerHTML = tab;
    }
    
    async function showDelivery(delivery_id) {
        let result = await fetch("https://pasd-webshop-api.onrender.com/api.delivery/" + ${"delivery_id":}, {
            method: 'GET',
            headers: {
                'Content-type': "application/json;charset-UTF=8",
                'delivery_id': delivery_id,
                'x-api-key': apiKey,
                // 'accept': application/json,
            }
        })
        let r =  await result.json();
        console.log(r);
    
    
        let tab =
            `<tr>
              <th>ID</th>
              <th>Ship On (Expected)</th>
              <th>Ship On (Actual)</th>
             </tr>`;
        
        for (let i = 0; i < r.delivery.length; i++) {
            tab += `<tr> 
        <td>${r.delivery[i].id}</tb> 
        <td>${r.delivery[i].expected_deliver_datetime}</td> 
        <td>${r.delivery[i].actual_deliver_datetime}</tb>
        </tr>`;
        }
        document.getElementById("delivery").innerHTML = tab;
    }

// server.listen(8000);