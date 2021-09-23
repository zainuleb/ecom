import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  let { id } = useParams();

  const [ product, setProduct ] = useState({});

  const getData = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(data)
  };

  useEffect(() => {
    try {
      getData()
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line
  }, []);

  return <div>{product ? <div>{product.title}</div> : <div>Loading</div>}</div>;
};

export default ProductDetail;
