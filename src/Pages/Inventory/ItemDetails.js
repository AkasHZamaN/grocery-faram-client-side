import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CheckCircleIcon, DotsVerticalIcon, ShoppingCartIcon, StarIcon} from "@heroicons/react/solid";
import useProductDetails from "../../hooks/useProductDetails";
import { toast } from "react-toastify";


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
            toast('Quantity Successfully Added')
            event.target.reset();
            // setProductView(reStockQuantity);
            window.location.reload();
        });
      }
      else{
          toast('Please INPUT Positive Value');
      }
  };

  // decrease quantity
  const decreaseQuantity = () => {
    const quantity = parseInt(productView.quantity) - 1;
    const updateQuantity = { quantity };
    // setProductView(updateQuantity);

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
        toast("Quantity Successfully Decrease")
        window.location.reload();
      });
  };

  return (
    <div style={{fontFamily:'baloo2,cursive'}}>
      <div className="container w-100 mx-auto my-5 d-felx row row-cols-1 row-cols-lg-2 g-4">
        <div>
          <img
            style={{ height: "300px" }}
            className="w-100 mx-auto rounded-3"
            src={productView.photo}
            alt=""
          />
          <div className="w-100 my-5">
            <Link to={`/checkout/${id}`}>
              <Button style={{backgroundColor:'#6A1B4D',color:'white'}} className="mt-5">
                ORDER NOW <ShoppingCartIcon style={{height:'25px'}}></ShoppingCartIcon>
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <h3 style={{color:'#6A1B4D', fontWeight:'bold'}}>{productView.name}</h3>

          <p style={{color:'#6A1B4D'}}>
            <span>
              <StarIcon
                style={{ height: "18px", color: "#6A1B4D" }}
              ></StarIcon>
            </span>
            <span>
              <StarIcon
                style={{ height: "18px", color: "#6A1B4D" }}
              ></StarIcon>
            </span>
            <span>
              <StarIcon
                style={{ height: "18px", color: "#6A1B4D" }}
              ></StarIcon>
            </span>
            <span>
              <StarIcon style={{ height: "18px", color: "#6A1B4D" }}></StarIcon>
            </span>
            <span>
              <StarIcon style={{ height: "18px", color: "gray" }}></StarIcon>
            </span>
          </p>

          <h5 style={{color:'#6A1B4D',fontWeight:'bold'}}>Price: {productView.price} ৳</h5>

          <div className="d-flex align-items-center fw-bold">
            <p className="mt-3" id="quantity">
              {productView.quantity}
            </p>
            <small style={{margin:'0 3px'}}>/kg</small>
            <small
              style={{
                border: "2px solid #27a745",
                borderRadius: "5px",
                padding: "0 10px",
                margin: "0 5px",
                display:'inline-flex'
              }}
            >
              <CheckCircleIcon style={{height:'20px',marginRight:'2px'}}></CheckCircleIcon>
              {productView.available}
            </small>
          </div>

          <p style={{color:'gray'}}>{productView.description}</p>

          <p style={{color:'#6A1B4D'}}>
            Product Id:
            <small className="bg-success bg-opacity-10 rounded-3 px-1 ms-1">
              {productView._id}
            </small>
          </p>
          <p style={{color:'#6A1B4D'}}>
            Suplier Name:
            <small className="bg-success bg-opacity-10 rounded-3 px-1 ms-1">
              {" "}
              {productView.dealer}
            </small>
          </p>

          <div className="w-100 mx-auto d-flex row row-cols-2 row-cols-lg-2 g-4 my-5 ">
            <form onSubmit={reStock}>
              <input
                
                style={{
                  width: "90px",
                  border: "1px solid  #6A1B4D",
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
              <Button
              style={{backgroundColor:'#6A1B4D'}}
                className="border-0 text-white rounded-3 pt-1"
                as="input"
                type="submit"
                value="RE STOCK"
              />
            </form>

            <div>
              <Button
              style={{backgroundColor:'#6A1B4D'}}
                onClick={decreaseQuantity}
                as="input"
                type="submit"
                className="border-0"
                value="DELEVERED"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 pb-5 text-end">
        <Button
        style={{backgroundColor:'#6A1B4D'}}
          onClick={getInventory}
          variant="outline-success text-white me-3 rounded-3"
        >
          <DotsVerticalIcon style={{height:'25px'}}></DotsVerticalIcon>
          GET MORE PRODUCT
        </Button>
      </div>
    </div>
  );
};

export default ItemDetails;
