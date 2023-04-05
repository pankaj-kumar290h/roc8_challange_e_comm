import React, { useState, useEffect } from "react";
import "../styles/product_page.scss";

import { BsFillCartPlusFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/util/Loader";
import { addToCart } from "../store/reducer/cartReducer";

import { useParams } from "react-router-dom";

import { toast } from "react-toastify";
function Product() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const CartProduct = useSelector((e) => e.Cart);

  const [product, setProduct] = useState(null);

  const fetchSingleProduct = async (id) => {
    if (!id) return;

    const data = await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((pro) => pro.json())
      .catch((err) => console.log(err));

    setProduct(data);
  };

  useEffect(() => {
    fetchSingleProduct(productId);
  }, [productId]);

  if (!product) return <Loader />;

  const add_to_cart = () => {
    let AllReadyInCart = CartProduct.length
      ? CartProduct.filter((e) => e.id === Number(productId))
      : [];
    if (AllReadyInCart.length) {
      msg(" Item Present In Cart");
      return;
    }

    if (!product) return;

    product.quantity = 1;
    dispatch(addToCart(product));

    msg("Added to Cart");
  };

  const msg = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <div className="product_page">
        <div className="product_image">
          <img src={product.image} alt="product"></img>
        </div>
        <div className="product_details">
          <h2>{product.title}</h2>
          <p id="category">Category:- {product.category}</p>
          <p>Discriptiin:- {product.description}</p>
          <div className="rating">
            <p>
              <span className="star">
                <AiFillStar />
                {product.rating.rate}
              </span>
            </p>
            <p className="count">Count: {product.rating.count}</p>
          </div>
          <h2 id="price">${product.price}</h2>
          <div id="buttons">
            <button onClick={add_to_cart} id="cart_btn">
              <BsFillCartPlusFill /> ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
