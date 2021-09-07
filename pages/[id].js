import styles from "./singlePage.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_cart_array_value } from "../store/slices/cart.slice";

import authSlice from "../store/slices/auth";

const singlePage = (props) => {
  const [showNotification, setshowNotification] = useState(false);
  const authSlice = useSelector((state) => state.authSlice);
  if (!props.product)
    return (
      <div className={styles.loding}>
        <img src="/./icons/loding.gif" />
      </div>
    );
  const dispatch = useDispatch();
  const addToCart = (item) => {
    setshowNotification(true);
    setTimeout(() => setshowNotification(false), 2000);
    dispatch(set_cart_array_value({ item }));
  };
  return (
    <>
      {showNotification && (
        <div className={`notification is-success ${styles.showNotification}`}>
          product added to cart
        </div>
      )}
      <div className={styles.realatev}>
        <div className={styles.ovarlay}></div>
        <div className={`${styles.dad} container`}>
          <div className={styles.start}>
            <div
              className={styles.Image}
              style={{
                backgroundImage: `url(${props.product.img_url})`,
              }}
            ></div>
          </div>
          <div className={styles.end}>
            <p className="is-size-6">{props.product.category}</p>
            <p className="is-size-3">{props.product.name}</p>
            <p className="is-size-5">{props.product.price + " $"}</p>
            <p className="is-size-6">
              Lorem Ipsum is simply dummied text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
            {authSlice.isLogIn && (
              <button
                onClick={() => addToCart(props.product)}
                className={styles.itemButton}
              >
                add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  return { paths: [], fallback: true }; // paths: []  = get all items id and stor them in opject
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

export default singlePage;
