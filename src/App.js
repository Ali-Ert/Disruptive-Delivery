import './App.css';
import DeliveryCard from './things/deliveryCard';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

var cors = require('cors')



const API_DEL = "https://pasd-webshop-api.onrender.com/api/delivery";
const API_ORD = "https://pasd-webshop-api.onrender.com/api/order";
const apiKey = "6SnJbnFntiR7KVnAfnz5";


const App = () => {

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getDelivery("Batman");
  }, []);

  const getDelivery = async (res, req, id) => {
      try{
        const res = await axios
          .get("https://pasd-webshop-api.onrender.com/api/delivery/${id}", {
            headers: {
              'delivery_id': id,
              'x-api-key': apiKey,
            }
          });
            return(res.data.delivery);
      }catch(error){
        return{};
      }
  }

  const getOrders = async (res, req) => {
    try{
      const res= await axios
        .get("https://pasd-webshop-api.onrender.com/api/order",{
          headers:{
            'x-api-key':apiKey,
          }
        });
          return(res.data.orders);
      }catch(error){
        return{};
      }
    }

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"> Disruptive Delivery </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#orders" onClick={getOrders} >Orders</Nav.Link>
            <Nav.Link href="#pricing">Labels</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className = "app"> 
        <div className="input-group">
          <input type="search" className="form-control rounded" 
             placeholder="Search for delivery" aria-label="Search" 
             aria-describedby="search-addon" 
             value = {searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             onClick = { (id) => getDelivery(id)}
          />
          <button type="button" className="btn btn-outline-primary">search</button>
        {/* </div>
       
        {deliveries?.length > 0 ? (
          <div className='container'>
             {deliveries.map( (delivery) => (
               <DeliveryCard delivery = {delivery}/>
             ))}
          </div>
          ):
          (
            <div className='empty'>
              <h2>No deliveries found</h2>
            </div>
          )
        }
        <div> */}
        </div>
      </Container>
    </div>
  );
}

export default App;
