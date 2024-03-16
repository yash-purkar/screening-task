import { Data } from "../../data/Data";
import { SingleProduct } from "../SingleProduct/SingleProduct";

export const ProductListing = () => {
  return (
    <div className="productsContainer">
      {Data.map((item,i) => (
        <SingleProduct key={i} item={item}/>
      ))}
    </div>
  );
};
