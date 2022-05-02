import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div>
        <h3 className="text-success text-center mt-5">INSERT YOUR NEW PRODUCT</h3>
      <div className="w-75 mx-auto my-5">
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2 p-2 rounded" style={{border:'1px solid #28a745'}} placeholder="Photo Url"  type="text" {...register("photo")} />
          <input className="mb-2 p-2 rounded" style={{border:'1px solid #28a745'}} placeholder="Product Name" 
            {...register("name", { required: true, maxLength: 20 })}
          />
          <input className="mb-2 p-2 rounded" style={{border:'1px solid #28a745'}} placeholder="Product Price"  type="number" {...register("price")} />
          <input className="mb-2 p-2 rounded" style={{border:'1px solid #28a745'}} placeholder="Product Quantity"  type="number" {...register("quantity")} />
          <textarea className="mb-2 p-2 rounded" style={{border:'1px solid #28a745'}} placeholder="Product Description"  {...register("description")} />
          <input className="mb-2 p-2 rounded" style={{border:'1px solid #28a745'}} placeholder="Dealer Name"  type="text" {...register("dealer")} />
          <Button className="my-4 fw-bold" variant="outline-success">ADD PRODUCT</Button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
