import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "./Card.scss";

const Card = ({ props }) => {
  const navigate = useNavigate();

  const { id, title, price, rating, image } = props;

  const productRouteHandler = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div onClick={() => productRouteHandler(id)} className="card">
      <div className="card_body">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="title">
          <h4>{title}</h4>
        </div>
        <p>${price}</p>
        <div className="rating">
          <p>
            <span className="star">
              <AiFillStar /> {rating.rate}
            </span>
          </p>
          <p className="count">Count: {rating.count}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
