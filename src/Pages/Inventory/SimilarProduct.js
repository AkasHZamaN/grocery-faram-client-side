import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SimilarProduct = ({pd}) => {
    const {_id, name, photo, price, quantity, description, dealer, available} = pd;
    const navigate = useNavigate();


    const orderNow = id =>{
        navigate(`/inventoryItem/${id}`)
    }
    return (
        <div>
            <div>
        <Card style={{border:'none'}}>
          <Card.Img style={{height:'280px',borderRadius:'7px'}} variant="top" src={photo} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <h4>{price} ৳</h4>
            <h6>{quantity} <span style={{border:'2px solid goldenrod', borderRadius:'5px', padding:'0 5px' }}> {available}</span></h6>
            <Card.Text>
              {description}
            </Card.Text>
            <p><small>{dealer}</small></p>
            <Button onClick={() => orderNow(_id)} variant="success">{name}</Button>
          </Card.Body>
        </Card>
      </div>
        </div>
    );
};

export default SimilarProduct;