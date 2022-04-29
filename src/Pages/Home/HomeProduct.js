import React from "react";
import { Button, Card } from "react-bootstrap";

const HomeProduct = ({homeItem}) => {
    const {name, photo, price, quantity, description, dealer} = homeItem;

    
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
            <Card.Title>{name}</Card.Title>
            <h4>{price} ৳</h4>
            <h6>{quantity} kg</h6>
            <Card.Text>{description}</Card.Text>
            <p>
              <small>{dealer}</small>
            </p>
            <Button variant="success">{name}</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HomeProduct;
