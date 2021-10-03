import styles from "./Shipping.module.css";
import CheckOut from "../../components/CheckOut/CheckOut";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { checkoutDone } from "../../store/slices/auth";
import Link from "next/link";
import Image from "next/image";
import PurpleButton from "../../components/PurpleButton/PurpleButton";
import { restMyCart } from "../../store/slices/cart.slice";

const Done = () => {
  const dispatch = useDispatch();
  const [myDisabled, setMyDisabled] = useState(true);
  useEffect(() => {
    dispatch(restMyCart());
  }, [dispatch]);
  const resetcheckoutState = () => {
    dispatch(checkoutDone());
  };
  return (
    <div className={styles.myDone}>
      <CheckOut Done={myDisabled} />
      <div className={styles.doneContent}>
        <Image
          src="/./icons/illustrations/Successful-purchase.svg"
          alt="Done"
          width="230"
          height="230"
        />
        <span>Congratulations!</span>
        <p className={styles.arriveSoon}>Your order is going to arrive soon</p>
        <Link href="/" passHref>
          <div onClick={resetcheckoutState}>
            <PurpleButton name={"go to shopping"} width={"400px"} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Done;
