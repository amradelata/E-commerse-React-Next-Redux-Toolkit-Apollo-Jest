import Link from "next/link";
import styles from "./ProductCard.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_cart_array_value } from "../store/slices/cart.slice";
const ProductCard = (props) => {
  const authSlice = useSelector((state) => state.authSlice);
  const [showNotification, setshowNotification] = useState(false);
  const dispatch = useDispatch();
  const addToCart = (item) => {
    console.log(item);
    dispatch(set_cart_array_value({ item }));
    setshowNotification(true);
    setTimeout(() => setshowNotification(false), 2000);
  };

  return (
    <>
      {showNotification && (
        <div className={`notification is-success ${styles.showNotification}`}>
          product added to cart
        </div>
      )}
      <div key={props.id} className={`card ${styles.myCard}`}>
        <Link href={`/${props.id}`} passHref>
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
            </div>
          </a>
        </Link>
        {authSlice.isLogIn && (
          <footer className="card-content">
            <button
              className={styles.itemButton}
              onClick={() => addToCart(props)}
            >
              add to cart
            </button>
          </footer>
        )}
      </div>
    </>
  );
};
export default ProductCard;
