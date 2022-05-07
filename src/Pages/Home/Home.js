import { CollectionIcon, DotsVerticalIcon } from "@heroicons/react/solid";
import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import HomeProduct from "./HomeProduct";

const Home = () => {
    const [products] = useProduct();
    const navigate = useNavigate();

    const goInventory = () =>{
        navigate('/inventory');
    }
  return (
    <div>
      <div className="my-3">
        <Carousel>
          <Carousel.Item>
            <img
                style={{height:'650px'}}
              className="d-block w-100"
              src="https://i.postimg.cc/s20hNztT/banner-1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Vegiterian House</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
                style={{height:'650px'}}
              className="d-block w-100"
              src="https://i.postimg.cc/zBgV2gwf/banner-2.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Vegitable Nutritaion</h3>
              <p>Healthy food items are available. Feel free to order your item</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            style={{height:'650px'}}
              className="d-block w-100"
              src="https://i.postimg.cc/rpv1QW0h/banner-3.webp"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Fruits Zone</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
        
        {/* home products  */}

        <div>
            <h4 style={{fontFamily:'baloo2, cursive'}} className="text-center my-5 text-uppercase fw-bold"><CollectionIcon style={{height:'35px', }}></CollectionIcon> Fresh organic foods are available</h4>
        <div className='w-100 mx-auto row row-cols-1 row-cols-lg-3 g-4'>
            {
                products.slice(0,6).map(homeItem => <HomeProduct key={homeItem._id} homeItem={homeItem}></HomeProduct>)
            }
        </div>
        <div className="w-100 text-end my-3">  
         <Button style={{backgroundColor:'white', color:'#6A1B4D', margin:'0 20px'}} onClick={goInventory}><DotsVerticalIcon style={{height:'22px'}}></DotsVerticalIcon>More Product </Button>
        </div>
        </div>
    </div>
  );
};

export default Home;
