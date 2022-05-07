import { CheckCircleIcon, PencilAltIcon, RefreshIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomeProduct = ({homeItem}) => {
    const {_id, name, photo, available, price, quantity, description, dealer} = homeItem;
    const navigate = useNavigate();

    
    const updateNow = (id) => {
      navigate(`/inventoryItem/${id}`)
  }
  return (
    <div>
      <div>
        <Card style={{ border: "none" }}>
          <Card.Img
            style={{ height: "280px", borderRadius: "7px" }}
            variant="top"
            src={photo}
          />
          <Card.Body>
            <Card.Title style={{fontFamily:'baloo2, cursive',fontWeight:'bold',textTransform:'uppercase',color:'#6A1B4D'}}>{name}</Card.Title>
            <h5 style={{fontFamily:'baloo2, cursive',fontWeight:'bold',color:'#6A1B4D'}}>{price} ৳</h5>
            <div style={{fontFamily:'baloo2, cursive',fontWeight:'bold',color:'#6A1B4D'}} className="d-flex align-items-center">
            <h6 style={{fontFamily:'baloo2, cursive',fontWeight:'bold'}}>{quantity}</h6>
            <small className="text-gray fw-bold mx-2">/kg</small>
            <span style={{border:'2px solid #6A1B4D', borderRadius:'5px', padding:'0 5px',display:'inline-flex',alignItems:'center'}}><CheckCircleIcon style={{height:'18px',marginRight:'2px',color:'#6A1B4D'}}></CheckCircleIcon> {available}</span>
            </div>
            <Card.Text style={{fontFamily:'baloo2, cursive',color:'gray',fontWeight:'normal',marginTop:'10px'}}>{description.slice(0,160)}</Card.Text>
            <p style={{color:'#6A1B4D',fontFamily:'baloo2, cursive', display:'flex',flexDirection:'column'}}>
              <small><ShoppingCartIcon style={{height:'15px', marginRight:'2px'}}></ShoppingCartIcon>{dealer}</small>
              <small><PencilAltIcon style={{height:'19px'}}></PencilAltIcon>{_id}</small>
            </p>
            
            <Button style={{fontFamily:'baloo2, cursive',fontWeight:'400px',border:'1px solid #6A1B4D',padding:'1px 15px',color:'#6A1B4D',opacity:'90%',margin:'20px 0'}} onClick={() => updateNow(_id)} variant=""><RefreshIcon style={{height:'22px'}}></RefreshIcon> UPDATE</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HomeProduct;
