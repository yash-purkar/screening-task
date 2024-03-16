import "./App.css";
import { Cart } from "./components/cart/Cart";
import { ProductListing } from "./components/productListng/ProductListing";

function App() {
  return (
    <div>
      <ProductListing />
      <Cart/>
    </div>
  );
}

export default App;
