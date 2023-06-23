import styles from "./ViewList.module.css";

function ViewList({ list, totalDiscount, sum }) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Discount (%)</th>
            <th>Discount ($)</th>
            <th>Total $</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.discount}</td>
              <td>{item.discountPrice.toFixed(2)}</td>
              <td>{item.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.containerSum}>
        <div className={styles.sum}>
          <p>Total Discount: $ {totalDiscount.toFixed(2)}</p>
          <p>Total Price: $ {sum.toFixed(2)} </p>
        </div>
      </div>
    </div>
  );
}
export default ViewList;
