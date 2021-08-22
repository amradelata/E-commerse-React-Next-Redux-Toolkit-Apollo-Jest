import styles from "./Shipping.module.css";
import Checkout from "./Checkout";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { restMyCart } from "../store/slices/cart.slice";

const Done = () => {
  const dispatch = useDispatch();
  const [myDisabled, setmyDisabled] = useState(false);
  useEffect(() => {
    dispatch(restMyCart());
  }, []);
  return (
    <div className="container">
      <Checkout Done={myDisabled} />
      <div className={styles.Done}>
        <img src="/./icons/checked.svg" />
        <p className="is-size-2">Congratulations!</p>
        <p className="is-size-5">Your order is going to arrive soon</p>
        <Link href="/">
          <button className="button is-info">go to shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Done;
