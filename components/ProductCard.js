import Link from "next/link";
import styles from "./ProductCard.module.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  set_first_item_in_cart,
  set_add_to_total_price,
} from "../store/slices/cart.slice";
import Image from "next/image";
import SuccessNotification from "../components/SuccessNotification";

const ProductCard = (props) => {
  const authSlice = useSelector((state) => state.authSlice);
  const CartSlice = useSelector((state) => state.CartSlice);
  const [is_product_in_cart, set_is_product_in_cart] = useState(false);

  const [showNotification, setshowNotification] = useState(false);
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(set_first_item_in_cart(item));

    dispatch(set_add_to_total_price(item));
    setshowNotification(true);
    setTimeout(() => setshowNotification(false), 2000);
  };

  React.useEffect(() => {
    const product = CartSlice.cart_products.find((p) => p.id === props.id);
    if (product) {
      set_is_product_in_cart(true);
    } else {
      set_is_product_in_cart(false);
    }
  }, [CartSlice.cart_products, props.id]);

  return (
    <>
      {showNotification && <SuccessNotification />}

      <div className={styles.myCard}>
        <Link href={`/single-page/${props.id}`} passHref>
          <a>
            <div className={styles.Image}>
              {/* Add the hostname of your URL to the images.domains config in next.config.js: */}

              {/* <Image
                src={props.img_url}
                alt="item Picture"
                width="300"
                height="300"
              /> */}

              <img src={props.img_url} />
            </div>
          </a>
        </Link>
        <div className={styles.content}>
          <p className={styles.category}>{props.category}</p>
          <p className={styles.itemName}>{props.name}</p>
          {props.discount > 1 && (
            <p className={styles.discount}>
              {props.price + props.discount + "$"}
            </p>
          )}
          <p className={styles.itemPrice}>{props.price + "$"}</p>
          {authSlice.isLogIn && (
            <button
              className={styles.itemButton}
              onClick={() => addToCart(props)}
              disabled={is_product_in_cart}
            >
              {is_product_in_cart ? "Product in cart" : "Add to cart"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default ProductCard;
