import Link from "next/link";
import styles from "./ProductCard.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  set_first_item_in_cart,
  set_add_to_total_price,
  set_second_item_in_cart,
} from "../store/slices/cart.slice";
import { set_in_my_cart } from "../store/slices/products.slice";

const ProductCard = (props) => {
  const authSlice = useSelector((state) => state.authSlice);
  const CartSlice = useSelector((state) => state.CartSlice);
  // useEffect(() => {
  //   // ANY reducer or thunk function MUST be called inside a dispatch()
  //   dispatch(set_in_my_cart(props));
  // }, [CartSlice.cart_products]);

  const [showNotification, setshowNotification] = useState(false);
  const dispatch = useDispatch();
  const addToCart = (item) => {
    // if (CartSlice.cart_products.length > 1) {
    //   dispatch(set_second_item_in_cart(item));
    // }
    // dispatch(set_first_item_in_cart(item));

    // dispatch(set_add_to_total_price(item));
    setshowNotification(true);
    setTimeout(() => setshowNotification(false), 2000);
    dispatch(set_in_my_cart(item));
  };

  return (
    <>
      {showNotification && (
        <div className={`notification is-success ${styles.showNotification}`}>
          product added to cart
        </div>
      )}

      <div className={`card ${styles.myCard}`}>
        <Link href={`/single-page/${props.id}`} passHref>
          <a>
            <div className="card-content">
              <div>
                <div
                  className={styles.Image}
                  style={{
                    backgroundImage: `url(${props.img_url})`,
                  }}
                ></div>
              </div>
              <p className={styles.category}>{props.category}</p>
              <p className={styles.itemName}>{props.name}</p>
              <p className={styles.itemPrice}>{props.price + " $"}</p>

              <p className={styles.itemPrice}>{CartSlice.itemPrice + " $"}</p>

              <p className={styles.category}>{props.discounts}</p>
            </div>
          </a>
        </Link>
        {authSlice.isLogIn && !props.in_my_cart ? (
          <div className="card-content">
            <button
              className={styles.itemButton}
              onClick={() => addToCart(props)}
            >
              add to cart
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default ProductCard;
