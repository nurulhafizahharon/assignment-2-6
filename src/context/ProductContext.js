import { createContext, useReducer } from "react";
import { productReducer, defaultProduct } from "../reducers/ProductReducers";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, defaultProduct);

  const handlerPlus = () => {
    dispatch({ type: "PLUS_COUNT" });
  };
  const handlerMinus = () => {
    dispatch({ type: "MINUS_COUNT" });
  };
  const handlerChangeName = (value) => {
    dispatch({ type: "SET_NAME", name: value });
  };
  const handlerChangePrice = (value) => {
    dispatch({ type: "SET_PRICE", price: value });
  };

  const context = {
    count: state.count,
    name: state.name,
    price: state.price,
    discount: state.discount,
    handlerPlus: handlerPlus,
    handlerMinus: handlerMinus,
    handlerChangeName: handlerChangeName,
    handlerChangePrice: handlerChangePrice,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
