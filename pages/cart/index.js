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
      {CartSlice.totalPrice ? (
        <div className={styles.cartPage}>
          <div className={styles.cart}>
            <div className={styles.cartItems}>
              <p className="is-size-5 has-text-weight-bold">CART PRODUCTS</p>
              <hr className={styles.myHr} />
              {/* mayCartItem */}
              {CartSlice.cart_products.map((item, index) => (
                <div className={styles.cartItem} key={item.id}>
                  <div
                    className={styles.cartImg}
                    style={{
                      backgroundImage: `url(${item.img_url})`,
                    }}
                  ></div>
                  <div style={{ textAlign: "center" }}>
                    <p className="is-size-4">{item.name + " "}</p>
                    <p className="is-size-6 has-text-weight-bold">
                      {" "}
                      {item.price + "$"}
                    </p>
                    <div className={styles.atyBut}>
                      <button
                        className={styles.cartBtn}
                        onClick={() => removeOnefunction(item, index)}
                      >
                        -
                      </button>
                      <span className="is-size-6 has-text-weight-bold">
                        {item.quantity}
                      </span>
                      <button
                        className={styles.cartBtn}
                        onClick={() => addOnefunction(item, index)}
                      >
                        +
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
              <p className="is-size-4">
                {"TotalPrice : " + CartSlice.totalPrice + "$"}
              </p>
            </div>
            {/* mayCartItem */}

            <div className={styles.summary}>
              <p className="is-size-5 has-text-weight-bold">CART SUMMARY</p>
              <hr className={styles.myHr} />
              <div className={styles.mySummary}>
                <p className={styles.lapul}>Subtotal:</p>
                <span className={styles.value}>
                  {CartSlice.totalPrice + "$"}
                </span>
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
                <a>
                  <button className={styles.CheckoutBtn}>Checkout</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.empty}>
          <p className="is-size-4">cart is Empty</p>
          <img src="/./icons/illustrations/empty.svg" />
          <Link href="/" passHref>
            <a>
              <button>Go to shopping</button>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
