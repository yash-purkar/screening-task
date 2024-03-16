import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/features/cart";

export const SingleCartProduct = ({ item }) => {
  const dispath = useDispatch();
  const data = useSelector((state) => state.cart);

  //   it handles remove from cart
  const handleRemoveFromCart = () => {
    dispath(removeFromCart(item.id));
  };

  //   It handles increment product quantity
  const handleIncrementQuantity = () => {
    dispath(incrementQuantity(item.id));
  };

  //   It handles decrement product quantity
  const handleDecrementQuantity = () => {
    dispath(decrementQuantity(item.id));
  };

  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>{item.price * item.quantity}</p>
      <img src={item.image} alt={item.name} width={200} height={100} />
      <div className="cart_actions">
        <button onClick={handleIncrementQuantity}>+</button>
        <span>{item.quantity}</span>
        <button onClick={handleDecrementQuantity}>-</button>
      </div>

      <button onClick={handleRemoveFromCart}>Remove From Cart</button>
    </div>
  );
};
