import Link from "next/link";
import styles from "./ProductCard.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  set_first_item_in_cart,
  set_add_to_total_price,
  set_second_item_in_cart,
} from "../store/slices/cart.slice";
import {
  set_in_my_cart,
  if_item_in_cart,
} from "../store/slices/products.slice";

const ProductCard = (props) => {
  const authSlice = useSelector((state) => state.authSlice);
  const CartSlice = useSelector((state) => state.CartSlice);
  const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);
  // useEffect(() => {
  //   // ANY reducer or thunk function MUST be called inside a dispatch()
  //   dispatch(set_in_my_cart(props));
  // }, [CartSlice.cart_products]);

  const [showNotification, setshowNotification] = useState(false);
  const dispatch = useDispatch();
  const addToCart = (item) => {
    if (CartSlice.cart_products.length > 1) {
      dispatch(set_second_item_in_cart(item));
    }
    dispatch(set_first_item_in_cart(item));

    dispatch(set_add_to_total_price(item));
    setshowNotification(true);
    setTimeout(() => setshowNotification(false), 2000);

    // dispatch(set_in_my_cart(item));
    const newArray = ProdcutsSlice.productsArr.map((obj) => {
      if (obj.id === item.id) {
        return { ...obj, in_my_cart: true };
      } else {
        return obj;
      }
    });

    dispatch(if_item_in_cart(newArray));
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
            <div className={styles.content}>
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
              {props.discount > 1 && (
                <p className={styles.discount}>
                  {props.price + props.discount + "$"}
                </p>
              )}
              <p className={styles.itemPrice}>{props.price + "$"}</p>
            </div>
          </a>
        </Link>
        {authSlice.isLogIn && (
          <div className={styles.content}>
            <button
              className={styles.itemButton}
              onClick={() => addToCart(props)}
            >
              {props.in_my_cart ? (
                <span> In my cart</span>
              ) : (
                <span> Add to cart</span>
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default ProductCard;
