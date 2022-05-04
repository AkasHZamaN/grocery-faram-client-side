import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/solid";
import useProductDetails from "../../hooks/useProductDetails";


const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productView] = useProductDetails(id);

  const getInventory = () => {
    navigate("/inventory");
  };

  const reStock = (event) => {
      event.preventDefault();
      const number = parseInt(event.target.number.value);
      console.log(number)

    //   send data in the database
      if(number > 0 && number !== ''){
        const quantity = parseInt(productView.quantity) + parseInt(number);
        const reStockQuantity = { quantity };
        console.log(reStockQuantity);

        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method:'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(reStockQuantity)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Successfully Added Quantity of This Product')
            window.location.reload();
        });
      }
      else{
          alert('Please INPUT Positive Value otherwise get Error');
      }
  };

  // decrease quantity
  const decreaseQuantity = () => {
    const quantity = parseInt(productView.quantity) - 1;
    const updateQuantity = { quantity };
    console.log(updateQuantity);

    // send data in the database
    const url = `http://localhost:5000/product/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("Quantity will Decrease after RELOAD ")
        window.location.reload();
      });
  };

  return (
    <div>
      <div className="container w-100 mx-auto my-5 d-felx row row-cols-1 row-cols-lg-2 g-4">
        <div>
          <img
            style={{ height: "300px" }}
            className="w-100 mx-auto rounded-3"
            src={productView.photo}
            alt=""
          />
          <div className="w-75 mx-auto my-5">
            <Link to={`/checkout/${id}`}>
              <Button className="w-100 my-2" variant="outline-success px-3">
                PROCEED TO CHECKOUT
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <h3>{productView.name}</h3>

          <p>
            <span>
              <StarIcon
                style={{ height: "18px", color: " #28a745" }}
              ></StarIcon>
            </span>
            <span>
              <StarIcon
                style={{ height: "18px", color: " #28a745" }}
              ></StarIcon>
            </span>
            <span>
              <StarIcon
                style={{ height: "18px", color: " #28a745" }}
              ></StarIcon>
            </span>
            <span>
              <StarIcon style={{ height: "18px", color: "gray" }}></StarIcon>
            </span>
            <span>
              <StarIcon style={{ height: "18px", color: "gray" }}></StarIcon>
            </span>
          </p>

          <h5>Price: {productView.price} ৳</h5>

          <div className="d-flex align-items-center">
            <p className="mt-3" id="quantity">
              {productView.quantity}
            </p>
            <small
              style={{
                border: "2px solid #27a745",
                borderRadius: "5px",
                padding: "0 10px",
                margin: "0 5px",
              }}
            >
              {" "}
              {productView.available}
            </small>
          </div>

          <p>{productView.description}</p>

          <p>
            Product Id:
            <small className="bg-success bg-opacity-10 rounded-3 px-1 ms-1 text-success">
              {productView._id}
            </small>
          </p>
          <p>
            Suplier Name:
            <small className="bg-success bg-opacity-10 rounded-3 px-1 ms-1 text-success">
              {" "}
              {productView.dealer}
            </small>
          </p>

          <div className="w-100 mx-auto d-flex row row-cols-2 row-cols-lg-2 g-4 my-5 ">
            <form onSubmit={reStock}>
              <input
                
                style={{
                  width: "90px",
                  border: "1px solid  #28a745",
                  borderRadius: "5px",
                  textAlign: "center",
                  paddingBottom: "7px",
                  marginBottom: "10px",
                  marginRight: "5px",
                }}
                // defaultValue={productView.quantity}
                type="number"
                name="number"
                id=""
              />
              {/* <input className='border-0 bg-success text-white rounded-3' type="submit" name="submit" id=""/> */}
              <Button
                className="border-0 bg-success text-white rounded-3 pt-1"
                as="input"
                type="submit"
                value="RE STOCK"
              />{" "}
            </form>

            <div>
              <Button
                onClick={decreaseQuantity}
                as="input"
                type="submit"
                className="bg-success"
                value="DELEVERED"
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="w-50 mx-auto">
        <Button
          onClick={getInventory}
          variant="outline-success w-100 rounded-3"
        >
          GET MORE PRODUCT
        </Button>
      </div>
    </div>
  );
};

export default ItemDetails;
