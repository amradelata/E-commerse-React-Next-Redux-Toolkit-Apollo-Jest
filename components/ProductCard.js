import Link from "next/link";
import styles from "./ProductCard.module.css";
import React, { useState } from "react";
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
  const [is_product_in_cart, set_is_product_in_cart] = useState(false);

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

    dispatch(set_in_my_cart(item));
  };

  React.useEffect(() => {
    const product = CartSlice.cart_products.find((p) => p.id === props.id);
    if (product && product.id) {
      set_is_product_in_cart(true);
    } else {
      set_is_product_in_cart(false);
    }
  }, [CartSlice.cart_products, props.id]);

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
            {!is_product_in_cart ? (
              <button
                className={styles.itemButton}
                onClick={() => addToCart(props)}
              >
                <span> Add to cart</span>
              </button>
            ) : (
              <button
                className={styles.itemButton}
                onClick={() => addToCart(props)}
              >
                <span> Product already in cart</span>
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default ProductCard;
