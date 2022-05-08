import { CollectionIcon, DotsVerticalIcon, TruckIcon } from "@heroicons/react/solid";
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
    <div style={{backgroundImage:"url('https://i.postimg.cc/65sRGkb3/add-banner-4.png')"}}>
      <div className="pb-3">
        <Carousel style={{fontFamily:'baloo2,cursive'}}>
          <Carousel.Item>
            <img
                style={{height:'650px'}}
              className="d-block w-100"
              src="https://i.postimg.cc/QMBJdjVd/banner-1.jpg"
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

      <div className="mx-2">
        <img style={{boxShadow:'5px 5px 20px'}} className="w-100 rounded-3" src="https://i.postimg.cc/HWB0X6RM/parcenteage.png" alt="" />
        </div>
        
        {/* home products  */}

        <div>
            <h4 style={{fontFamily:'baloo2, cursive',color:'#6A1B4D'}} className="text-center my-5 text-uppercase fw-bold"><CollectionIcon style={{height:'35px', }}></CollectionIcon> Fresh organic foods are available</h4>
        <div className='w-100 mx-auto row row-cols-1 row-cols-lg-3 g-4'>
            {
                products.slice(0,6).map(homeItem => <HomeProduct key={homeItem._id} homeItem={homeItem}></HomeProduct>)
            }
        </div>
        <div className="w-100 text-end my-3">  
         <Button style={{fontFamily:'baloo2,cursive',border:'1px solid #6A1B4D ',backgroundColor:'white', color:'#6A1B4D', margin:'0 20px'}} onClick={goInventory}><DotsVerticalIcon style={{height:'22px'}}></DotsVerticalIcon>More Product </Button>
        </div>
        <div className="mx-2 pb-2">
          <h4 style={{fontFamily:'baloo2,cursive',color:'#6A1B4D',textAlign:'start',display:'flex',alignItems:'center'}}>Delevery Service <TruckIcon style={{height:'30px',marginLeft:'2px'}}></TruckIcon></h4>
        <img style={{height:'600px',boxShadow:'5px 5px 20px'}} className="w-100 my-3 rounded-3" src="https://i.postimg.cc/1zVMK2bX/nuw-banner-pix-1.png" alt="" />
        </div>
        </div>
    </div>
  );
};

export default Home;
