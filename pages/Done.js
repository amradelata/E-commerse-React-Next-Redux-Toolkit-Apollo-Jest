import styles from "./Shipping.module.css";
import CheckOut from "../components/CheckOut/CheckOut";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chickOutDone } from "../store/slices/auth";
import Link from "next/link";
import Image from "next/image";
import PurpleButton from "../components/PurpleButton/PurpleButton";
import { restMyCart } from "../store/slices/cart.slice";

const Done = () => {
  const authSlice = useSelector((state) => state.authSlice);
  const CartSlice = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();
  const [myDisabled, setmyDisabled] = useState(true);
  useEffect(() => {
    dispatch(restMyCart());
  }, [dispatch]);
  const resetChickOutState = () => {
    dispatch(chickOutDone());
  };
  return (
    <div className={styles.myDone}>
      <CheckOut Done={myDisabled} />
      <div>
        <Image
          src="/./icons/illustrations/Successful-purchase.svg"
          alt="Done"
          width="230"
          height="230"
        />
        <span className="is-size-2">Congratulations!</span>
        <p className={styles.arrivesoon}>Your order is going to arrive soon</p>
        <Link href="/" passHref>
          <div onClick={resetChickOutState}>
            <PurpleButton name={"go to shopping"} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Done;
