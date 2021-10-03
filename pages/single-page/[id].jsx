import styles from "./singlePage.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  add_to_cart,
  set_add_to_total_price,
} from "../../store/slices/cart.slice";
import SuccessNotification from "../../components/SuccessNotification/SuccessNotification";
import PurpleButton from "../../components/PurpleButton/PurpleButton";

import Loading from "../../components/Loading/Loading";
import { useRouter } from "next/router";

const SinglePage = (props) => {
  const AuthSlice = useSelector((state) => state.AuthSlice);
  const CartSlice = useSelector((state) => state.CartSlice);
  const [showNotification, setShowNotification] = useState(false);
  const [is_product_in_cart, set_is_product_in_cart] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (props?.product?.id) {
      const product = CartSlice.cart_products.find(
        (p) => p.id === props.product.id
      );
      if (product) {
        set_is_product_in_cart(true);
      } else {
        set_is_product_in_cart(false);
      }
    }
  }, [CartSlice.cart_products, props]);

  if (router.isFallback) {
    return <Loading />;
  }

  const addToCart = (item) => {
    dispatch(add_to_cart(item));
    dispatch(set_add_to_total_price(item));
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };
  return (
    <>
      {showNotification && <SuccessNotification />}
      <div className={styles.relative}>
        <div className={styles.background}></div>
        <div className={styles.myCountries}>
          <div className={`${styles.card} container`}>
            <div className={styles.start}>
              <div
                className={styles.Image}
                style={{
                  backgroundImage: `url(${props.product.img_url})`,
                }}
              ></div>
            </div>
            <div className={styles.end}>
              <p className={styles.category}>{props.product.category}</p>
              <p className={styles.name}>{props.product.name}</p>

              {props.product.discount > 1 && (
                <p className={styles.discount}>
                  {props.product.price + props.product.discount + "$"}
                </p>
              )}
              <p className={styles.price}>{props.product.price + " $"}</p>
              <p className={styles.description}>
                Lorem Ipsum is simply dummied text of the printing and
                typesetting industry. Lorem Ipsum has been the standard dummy.
              </p>
              {AuthSlice.isLogIn && (
                <div
                  onClick={() => addToCart(props.product)}
                  style={{ float: "left" }}
                >
                  <PurpleButton
                    name={
                      is_product_in_cart ? "Product in cart" : "Add to cart"
                    }
                    myDisabled={is_product_in_cart}
                    width={"300px"}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }; // paths: []  = get all items id and stor them in object
}

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:3001/products/${context.params.id}`
  );
  const product = await res.json();
  // Pass product data to the page via props
  return {
    props: { product },
    revalidate: 5, // build the page each 5 seconds, IF NEEDED (ISG)
  };
}

export default SinglePage;
