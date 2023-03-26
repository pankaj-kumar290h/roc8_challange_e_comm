import { useSelector } from "react-redux";
import { FcFile } from "react-icons/fc";

import "../styles/cart.scss";
import CartCard from "../components/card/CartCard";

const Cart = () => {
  const cartProduct = useSelector((e) => e.Cart);

  if (cartProduct.length === 0) {
    return (
      <>
        <div className="empty_cart">
          <div>
            <FcFile className="file_icon" />
            <h1>Cart is Empty</h1>
          </div>
        </div>
      </>
    );
  }

  const allProduct = cartProduct.map((product) => {
    return <CartCard key={crypto.randomUUID()} product={product} />;
  });

  return (
    <>
      <div className="cart_section">
        <div className="cart_product_section">{allProduct}</div>
      </div>
    </>
  );
};

export default Cart;
