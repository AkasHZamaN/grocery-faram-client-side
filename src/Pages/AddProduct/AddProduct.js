import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  

  const onSubmit = (data, event) => {
    if(data !== false){
      const url = `http://localhost:5000/product`;
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
    <div>
        <h3 className="text-success text-center mt-5">INSERT YOUR NEW PRODUCT</h3>
      <div className="w-75 mx-auto my-5">
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2 p-2 rounded" style={{border:'1px solid #28a745'}} placeholder="Photo Url"  type="text" {...register("photo")} required/>
          <input className="mb-2 p-2 rounded" style={{border:'1px solid #28a745'}} type="text" placeholder="Product Name" 
            {...register("name", { required: true, maxLength: 20 })} required
          />
          <input className="mb-2 p-2 rounded" style={{border:'1px solid #28a745'}} placeholder="Product Price"  type="number" {...register("price")} required/>

          <input className="mb-2 p-2 rounded" style={{border:'1px solid #28a745'}} placeholder="Type 'In Stock' " type="text" {...register("available")} required/>


          <input className="mb-2 p-2 rounded" style={{border:'1px solid #28a745'}} placeholder="Product Quantity"  type="number" {...register("quantity")} required/>
          <textarea className="mb-2 p-2 rounded" style={{border:'1px solid #28a745'}} placeholder="Product Description"  {...register("description")} required/>
          <input className="mb-2 p-2 rounded" style={{border:'1px solid #28a745'}} placeholder="Dealer Name"  type="text" {...register("dealer")} />
         
          <Button variant="outline-success" as="input" type="submit" value="ADD PRODUCT" />{' '}
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
