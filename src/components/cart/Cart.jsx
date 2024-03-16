import { useSelector } from "react-redux";
import { SingleCartProduct } from "./SingleCart";

export const Cart = () => {
  const data = useSelector((state) => state.cart);

  // It calculates the total amount
  const totalAmountOfProducts = data.cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <div>
      <h2>Cart Items</h2>
      <div className="productsContainer">
        {data?.cart?.map((item, i) => (
          <SingleCartProduct key={i} item={item} />
        ))}
      </div>

      <h3>Total Price: {totalAmountOfProducts}</h3>
    </div>
  );
};
