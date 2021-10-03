import styles from "./ProductCard.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  add_to_cart,
  set_add_to_total_price,
} from "../../store/slices/cart.slice";

import SuccessNotification from "../../components/SuccessNotification/SuccessNotification";
import PurpleButton from "../../components/PurpleButton/PurpleButton";
import Link from "next/link";

const ProductCard = (props) => {
  const AuthSlice = useSelector((state) => state.AuthSlice);
  const CartSlice = useSelector((state) => state.CartSlice);
  const [is_product_in_cart, set_is_product_in_cart] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const product = CartSlice.cart_products.find((p) => p.id === props.id);
    if (product) {
      set_is_product_in_cart(true);
    } else {
      set_is_product_in_cart(false);
    }
  }, [CartSlice.cart_products, props.id]);

  const addToCart = (item) => {
    dispatch(add_to_cart(item));
    dispatch(set_add_to_total_price(item));
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <>
      {showNotification && <SuccessNotification />}

      <div className={styles.myCard}>
        <Link href={`/single-page/${props.id}`} passHref>
          <a>
            <div className={styles.Image}>
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
          {AuthSlice.isLogIn && (
            <div onClick={() => addToCart(props)}>
              <PurpleButton
                name={is_product_in_cart ? "Product in cart" : "Add to cart"}
                myDisabled={is_product_in_cart}
                width={"100%"}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default ProductCard;
