import styles from "./Shipping.module.css";
import CheckOut from "../components/CheckOut";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chickOutDone } from "../store/slices/auth";
import Link from "next/link";

import { restMyCart } from "../store/slices/cart.slice";

const done = () => {
  const authSlice = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const [myDisabled, setmyDisabled] = useState(true);
  useEffect(() => {
    dispatch(restMyCart());
    // dispatch(chickOutDone());
  }, [authSlice.Payment]);
  const resetChickOutState = () => {
    dispatch(chickOutDone());
  };
  return (
    <div className={styles.myDone}>
      <CheckOut Done={myDisabled} />
      <div className={styles.Done}>
        <img src="/./icons/checked.svg" />
        <p className="is-size-2">Congratulations!</p>
        <p className="is-size-5">Your order is going to arrive soon</p>
        <Link href="/">
          <button className="button is-info" onClick={resetChickOutState}>
            go to shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default done;
