import { useEffect, useState } from "react";

const useProductDetails = (id) =>{
    const [productView, setProductView] = useState({});

  useEffect(() => {
    const url = `https://cryptic-bastion-13696.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProductView(data);
      });
  }, [id]);

  return [productView, setProductView];
}

export default useProductDetails;