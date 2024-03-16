import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/features/cart";

export const SingleProduct = ({ item }) => {
  const dispath = useDispatch();
  const data = useSelector((state) => state.cart);

//   Handle add product to cart
  const handleAddProductToCart = () => {
    dispath(addToCart(item));
  };

//   handles remove product from cart
  const handleRemoveFromCart = () => {
    dispath(removeFromCart(item.id));
  };

  //   It checks is item in the cart or not
  const isProductInCart = data?.cart?.some((product) => product.id === item.id);

  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <img src={item.image} alt={item.name} width={200} height={100} />
      {isProductInCart ? (
        <button onClick={handleRemoveFromCart}>Remove From Cart</button>
      ) : (
        <button onClick={handleAddProductToCart}>Add To Cart</button>
      )}
    </div>
  );
};
