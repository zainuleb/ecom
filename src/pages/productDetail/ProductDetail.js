import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions/index.js";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  //Actions Area
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.productsActions.fetchProductDetails(id));
    // eslint-disable-next-line
  }, []);

  //Select State from Redux
  const { productDetails } = useSelector((state) => state.productDetails);

  const [product, setProduct] = useState();

  const getProduct = () => {
    if (productDetails !== null) {
      setProduct(productDetails);
    }
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  }, [productDetails]);

  return (
    <div>
      Here
      {product ? (
        <div>
          {product.title}
          <div>
            <img alt={product.title} src={product.image} />
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default ProductDetail;
