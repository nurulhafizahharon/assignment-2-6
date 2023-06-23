import { useState, useContext } from "react";
import ProductContext from "../context/ProductContext";

import styles from "./Product.module.css";
import Card from "./Card";
import ViewList from "./ViewList";

function Product() {
  const ctx = useContext(ProductContext);

  const [list, setList] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  const handlerAddProduct = () => {
    console.log("handlerAddProduct: name, price: ", ctx.name, ctx.price);

    const newItem = {
      name: ctx.name,
      quantity: ctx.count,
      price: ctx.price,
      discount: ctx.discount,
      discountPrice: (ctx.price * ctx.count * ctx.discount) / 100,
      total: (ctx.count * ctx.price * (100 - ctx.discount)) / 100,
    };

    const newList = [...list, newItem];
    setList(newList);

    //const sum = sumTotal + newItem.total;
    setTotalSum(totalSum + newItem.total);
    setTotalDiscount(totalDiscount + newItem.discountPrice);
  };

  return (
    <div className={styles.container}>
      <Card handlerAddProduct={handlerAddProduct} />
      <ViewList list={list} totalDiscount={totalDiscount} sum={totalSum} />
    </div>
  );
}
export default Product;
