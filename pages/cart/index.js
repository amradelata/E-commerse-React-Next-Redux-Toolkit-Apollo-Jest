import { useSelector, useDispatch } from "react-redux";
import { remove_item_from_cart } from "../../store/slices/cart.slice";
import { addOne } from "../../store/slices/cart.slice";
import { removeOne } from "../../store/slices/cart.slice";
import styles from "./cart.module.css";

const Cart = () => {
  const Dispatch = useDispatch();
  const CartSlice = useSelector((state) => state.CartSlice);

  const remove = (item, index) => {
    // console.log(item, index);
    Dispatch(remove_item_from_cart({ item, index }));
  };
  const addOnefunction = (item, index) => {
    Dispatch(addOne({ item, index }));
  };
  const removeOnefunction = (item, index) => {
    Dispatch(removeOne({ item, index }));
  };
  return (
    <div className="container is-fluid">
      <p className="is-size-2">cart</p>

      {CartSlice.cart_products.map((item, index) => (
        <div className={styles.cartItems} key={item.id}>
          <div>
            <p className="is-size-4">{item.name + " "}</p>
            <p className="is-size-6"> {item.price + "$"}</p>
            <p className="is-size-6"> {"quantity : " + item.quantity}</p>
            <hr />
          </div>
          <div>
            <button
              className="button is-danger"
              onClick={() => remove(item, index)}
            >
              delete
            </button>
            <button
              className="button is-danger"
              onClick={() => addOnefunction(item, index)}
            >
              +1
            </button>
            <button
              className="button is-danger"
              onClick={() => removeOnefunction(item, index)}
            >
              -1
            </button>
          </div>
        </div>
      ))}
      {!CartSlice.totalPrice ? (
        <p className="is-size-4">cart is Empty</p>
      ) : (
        <p className="is-size-4">
          {"TotalPrice : " + CartSlice.totalPrice + "$"}
        </p>
      )}
    </div>
  );
};

export default Cart;
