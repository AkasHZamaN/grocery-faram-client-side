import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Button, Carousel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { PlusCircleIcon } from "@heroicons/react/solid";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  

  const onSubmit = (data, event) => {
    if(data !== false){
      const url = `https://cryptic-bastion-13696.herokuapp.com/product`;
      fetch(url,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res =>res.json())
      .then(result =>{
        console.log(result); 
        event.target.reset();
      })
      toast('Product Successfully Added');
    }
    else if(data === false){  
      toast('Please input all Field');
    }
    console.log(data);
    
  }
  
  return (
    <div style={{backgroundImage:"url('https://i.postimg.cc/HLbjmRzc/add-banner-1.png')"}} className=" mt-3">
        <div className="w-100 mx-auto d-flex justify-content-between row row-cols1 row-cols-lg-2 g-3">

      <div className="mt-5">
        <h4 style={{fontFamily:'baloo2, cursive', color:'#6A1B4D'}} className="fw-bold d-flex justify-content-center align-items-center">INSERT YOUR NEW PRODUCT <PlusCircleIcon style={{height:'35px',marginLeft:'5px'}}></PlusCircleIcon></h4>
      <div className="w-75 mx-auto my-5">
        <form style={{fontFamily:'baloo2, cursive'}} className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2 p-2 rounded" style={{border:'1px solid #6A1B4D'}} placeholder="Photo Url"  type="text" {...register("photo")} required/>
          <input className="mb-2 p-2 rounded" style={{border:'1px solid #6A1B4D',}} type="text" placeholder="Product Name" 
            {...register("name", { required: true, maxLength: 20 })} required
          />
          <input className="mb-2 p-2 rounded" style={{border:'1px solid #6A1B4D',}} placeholder="Product Price"  type="number" {...register("price")} required/>

          <input className="mb-2 p-2 rounded" style={{border:'1px solid #6A1B4D',}} placeholder="Type 'In Stock' " type="text" {...register("available")} required/>


          <input className="mb-2 p-2 rounded" style={{border:'1px solid #6A1B4D',}} placeholder="Product Quantity"  type="number" {...register("quantity")} required/>
          <textarea className="mb-2 p-2 rounded" style={{border:'1px solid #6A1B4D'}} placeholder="Product Description"  {...register("description")} required/>
          <input className="mb-2 p-2 rounded" style={{border:'1px solid #6A1B4D',}} placeholder="Dealer Name"  type="text" {...register("dealer")} />
         
          <Button style={{backgroundColor:'#6A1B4D',color:'white'}} variant="" as="input" type="submit" value="ADD PRODUCT"/>
           
         </form>
         <div className="w-100 mt-5 mx-auto">
           <img style={{width:'100%'}} src="https://i.postimg.cc/TYvhVwpD/bg-shopping-img.png" alt="" />
         </div>
        </div>
      </div>
      <div>

        {/* carousal start */}
      <div className="w-75 mx-auto mt-5 pb-5">
        <Carousel style={{fontFamily:'baloo2,cursive', marginRight:'10px'}}>
          <Carousel.Item>
            <img
              style={{height:'1000px'}}
              className="d-block w-100 rounded-3 "
              src="https://i.postimg.cc/7hQfRXW6/verticale-Banner-3.png"
              alt="First slide"
            />
            <Carousel.Caption>      
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            style={{height:'1000px'}}
              className="d-block w-100 rounded-3 "
              src="https://i.postimg.cc/g2hphd3j/vbanner-3-1.png"
              alt="Second slide"
            />
            <Carousel.Caption> 
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            style={{height:'1000px'}}
              className="d-block rounded-3 "
              src="https://i.postimg.cc/85zkVMWr/verticle-Banner-2.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* carousal end */}
    </div>
        
   </div>    
   </div>
  );
};

export default AddProduct;
