import styles from "./singlePage.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_cart_array_value } from "../../store/slices/cart.slice";

const SinglePage = (props) => {
  const dispatch = useDispatch();
  const [showNotification, setshowNotification] = useState(false);
  const [is_product_in_cart, set_is_product_in_cart] = useState(false);
  const authSlice = useSelector((state) => state.authSlice);
  const CartSlice = useSelector((state) => state.CartSlice);
  // useEffect(() => {
  //   const product = CartSlice.cart_products.find(
  //     (p) => p.id === props.product.id
  //   );
  //   if (product) {
  //     set_is_product_in_cart(true);
  //   } else {
  //     set_is_product_in_cart(false);
  //   }
  // }, [CartSlice.cart_products, props.product.id]);
  if (!props.product) {
    return (
      <div className={styles.loding}>
        <img src="/./icons/loding.gif" />
      </div>
    );
  }

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
        <div className={styles.bacground}></div>
        <div className={styles.mycontaner}>
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
              <p className={styles.discrpshion}>
                Lorem Ipsum is simply dummied text of the printing and
                typesetting industry. Lorem Ipsum has been the standard dummy.
              </p>
              {authSlice.isLogIn && (
                <button
                  onClick={() => addToCart(props.product)}
                  className={styles.itemButton}
                >
                  {is_product_in_cart ? "in my cart" : "add to cart"}
                </button>
              )}
            </div>
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

export default SinglePage;
