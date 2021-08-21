import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
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
      <div className={styles.cartPage}>
        <div className={styles.cart}>
          <div className={styles.cartItems}>
            <p className="is-size-5">CART PRODUCTS</p>
            <hr />
            {/* mayCartItem */}
            {CartSlice.cart_products.map((item, index) => (
              <div className={styles.cartItem} key={item.id}>
                <div
                  className={styles.cartImg}
                  style={{
                    backgroundImage: `url(${item.img_url})`,
                  }}
                ></div>
                <div>
                  <p className="is-size-4">{item.name + " "}</p>
                  <p className="is-size-6"> {item.price + "$"}</p>
                  <div className={styles.atyBut}>
                    <button
                      className={styles.cartBtn}
                      onClick={() => addOnefunction(item, index)}
                    >
                      +
                    </button>
                    <span className="is-size-6">{item.quantity}</span>
                    <button
                      className={styles.cartBtn}
                      onClick={() => removeOnefunction(item, index)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    className={styles.cartBtn}
                    onClick={() => remove(item, index)}
                  >
                    <img src="/./icons/delete.svg" />
                  </button>
                  <button className={styles.cartBtn}>
                    <Link href={`/${item.id}`} passHref>
                      <a>
                        <img src="/./icons/about.svg" />
                      </a>
                    </Link>
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
          {/* mayCartItem */}

          <div className={styles.summary}>
            <p>CART SUMMARY</p>
            <hr />
            <div>
              <p className={styles.lapul}>Subtotal:</p>
              <span className={styles.value}>{CartSlice.totalPrice + "$"}</span>
            </div>
            <div>
              <p className={styles.lapul}>Shipping:</p>
              <span className={styles.value}>Free</span>
            </div>
            <div>
              <p className={styles.lapul}>Total:</p>
              <span className={`has-text-success is-size-5 ${styles.value}`}>
                {CartSlice.totalPrice + "$"}
              </span>
            </div>
            <Link href="/Checkout" passHref>
              <button className={styles.CheckoutBtn}>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
