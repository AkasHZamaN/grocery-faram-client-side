import React from "react";
import { Carousel } from "react-bootstrap";

const Home = () => {
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
    </div>
  );
};

export default Home;
