import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiFillStar, AiTwotoneDelete } from "react-icons/ai";
import { removeFromCart } from "../../store/action/cartAction";
import { toast } from "react-toastify";

const CartCard = ({ product }) => {
  const [quntity, setQuntity] = useState(1);

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
  const handleReduceQuantity = () => {
    if (quntity <= 1) {
      removeItem();
    } else {
      setQuntity(quntity - 1);
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
            <button onClick={() => setQuntity(quntity + 1)}>+</button>
            <span>{quntity}</span>
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
