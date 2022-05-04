import { useEffect, useState } from "react";

const useProductDetails = (id) =>{
    const [productView, setProductView] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProductView(data);
      });
  }, [id]);

  return [productView, setProductView];
}

export default useProductDetails;