import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiFillStar, AiTwotoneDelete } from "react-icons/ai";
import {
  addQuantity,
  removeFromCart,
  subtractQuantity,
} from "../../store/reducer/cartReducer";
import { toast } from "react-toastify";

const CartCard = ({ product }) => {
  console.log(product);
  const [quantity, setQuantity] = useState(product.quantity);

  const dispatch = useDispatch();

  const msg = () => {
    toast.success("Removed From Cart", {
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

  const removeItem = () => {
    dispatch(removeFromCart(product.id));
    msg();
  };
  const handleAddQuntity = () => {
    dispatch(addQuantity(product.id));
  };
  const handleReduceQuantity = () => {
    if (quantity <= 1) {
      removeItem();
    } else {
      dispatch(subtractQuantity(product.id));
    }
  };

  if (!product) return;

  return (
    <div className="cart_page">
      <div className="product_image">
        <img src={product.image} alt=""></img>
      </div>
      <div className="product_details">
        <h2>{product.title}</h2>
        <p id="category">Category:- {product.category}</p>
        <p>Discription:- {product.description.slice(0, 300)}</p>
        <div className="rating">
          <p>
            <span className="star">
              <AiFillStar />
              {product.rating.rate}
            </span>
          </p>
          <p className="count">Count: {product.rating.count}</p>
        </div>
        <div className="price_section">
          <h2 id="price">${product.price}</h2>
          <div className="quantity_counter">
            <button onClick={handleAddQuntity}>+</button>
            <span>{quantity}</span>
            <button onClick={handleReduceQuantity}>-</button>
          </div>
        </div>
      </div>
      <button className="remove" onClick={() => removeItem()}>
        <AiTwotoneDelete />
      </button>
    </div>
  );
};

export default CartCard;
