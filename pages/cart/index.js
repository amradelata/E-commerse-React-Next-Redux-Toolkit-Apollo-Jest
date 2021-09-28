import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { remove_item_from_cart } from "../../store/slices/cart.slice";
import { addOne } from "../../store/slices/cart.slice";
import { removeOne } from "../../store/slices/cart.slice";
import styles from "./cart.module.css";
import Image from "next/image";
import PageNotFoundMessage from "../../components/PageNotFoundMessage/PageNotFoundMessage";
import PurpleButton from "../../components/PurpleButton/PurpleButton";

const Cart = () => {
  const Dispatch = useDispatch();
  const CartSlice = useSelector((state) => state.CartSlice);

  const remove = (item, index) => {
    Dispatch(remove_item_from_cart({ item, index }));
  };
  const addOnefunction = (item, index) => {
    Dispatch(addOne({ item, index }));
  };
  const removeOnefunction = (item, index) => {
    Dispatch(removeOne({ item, index }));
  };
  return (
    <div className="container">
      {CartSlice.totalPrice ? (
        <div className={styles.cartPage}>
          <div className={styles.cart}>
            <div className={styles.cartItems}>
              <p className="has-text-weight-bold">CART PRODUCTS</p>

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
                    <p className={styles.name}>{item.name}</p>
                    {item.descount}

                    {item.discount > 1 && (
                      <p className={styles.discount}>
                        {item.price + item.discount + "$"}
                      </p>
                    )}
                    <p className={styles.itemPrice}>{item.price + "$"}</p>
                  </div>
                  <div className={styles.atyBut}>
                    <button
                      disabled={item.quantity === 1}
                      className={styles.cartBtn}
                      onClick={() => removeOnefunction(item, index)}
                    >
                      -
                    </button>

                    <span className={styles.quantity}>{item.quantity}</span>
                    <button
                      className={styles.cartBtn}
                      onClick={() => addOnefunction(item, index)}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <button className={styles.cartBtn}>
                      <Link href={`single-page/${item.id}`} passHref>
                        <a>
                          <Image
                            src="/./icons/about.svg"
                            alt="about"
                            width="23"
                            height="23"
                          />
                        </a>
                      </Link>
                    </button>
                    <button
                      className={styles.cartBtn}
                      onClick={() => remove(item, index)}
                    >
                      <Image
                        src="/./icons/delete.svg"
                        alt="delete"
                        width="23"
                        height="23"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* mayCartItem */}

            <div className={styles.summary}>
              <p className=" has-text-weight-bold">CART SUMMARY</p>

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
                <span className={styles.totalprice}>
                  {CartSlice.totalPrice + "$"}
                </span>
              </div>
              <Link href="checkout/shipping" passHref>
                <a>
                  <PurpleButton name={"Checkout"} width={"100%"} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.empty}>
          <PageNotFoundMessage title={"cart is Empty"} />
        </div>
      )}
    </div>
  );
};

export default Cart;
