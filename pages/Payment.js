import { useSelector, useDispatch } from "react-redux";
import styles from "./Shipping.module.css";
import Checkout from "./Checkout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { chickOutPayment } from "../store/slices/auth";

const Payment = () => {
  // useEffect(() => {
  //   setmyDisabled(false);
  // }, []);
  const CartSlice = useSelector((state) => state.CartSlice);
  const authSlice = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const router = useRouter();
  const [CardNumber, setCardNumber] = useState("");
  const [Owner, setOwner] = useState("");
  const [Expiration, setExpiration] = useState("");
  const [CVV, setCVV] = useState("");

  const [myDisabled, setmyDisabled] = useState(false);

  const [showForm, setshowForm] = useState(true);
  const nextStep = (e) => {
    e.preventDefault();

    router.push("/Done");
  };

  const desapuld = () => {
    if (
      CardNumber.length >= 1 &&
      Owner.length >= 1 &&
      Expiration.length >= 1 &&
      CVV.length >= 1
    ) {
      // setmyDisabled(true);
      dispatch(chickOutPayment(true));
    } else {
      dispatch(chickOutPayment(false));
    }
  };
  const showFormfunction = () => {
    dispatch(chickOutPayment(false));
    setshowForm(true);
  };
  const hiedFormFunction = () => {
    setshowForm(false);
    // setmyDisabled(true);
    dispatch(chickOutPayment(true));
  };
  return (
    <>
      <Checkout />
      <div className={styles.Checkout}>
        <div className={styles.pamentMethod}>
          <div className="control">
            <div>
              <label className={styles.myLabelRadio}>
                <input
                  type="radio"
                  className={styles.myRadioInput}
                  name="foobar"
                  onClick={showFormfunction}
                />
                How would you like to pay{" " + CartSlice.totalPrice + "$"}
                <img src="/./icons/visa.svg" />
                <img src="/./icons/mastercard.svg" />
              </label>
            </div>
            <div>
              <label className={styles.myLabelRadio}>
                <input
                  type="radio"
                  className={styles.myRadioInput}
                  name="foobar"
                  onClick={hiedFormFunction}
                />
                Cash on delivery
              </label>
            </div>
          </div>
        </div>
        {showForm ? (
          <form
            className={styles.MyForm}
            // onSubmit={nextStep}
            onChange={desapuld}
          >
            <div className={styles.fullWidth}>
              <label>Card Number</label>
              <input
                onChange={(e) => setCardNumber(e.target.value)}
                value={CardNumber}
              />
            </div>

            <div className={styles.fullWidth}>
              <label>Owner</label>
              <input onChange={(e) => setOwner(e.target.value)} value={Owner} />
            </div>
            <div className={styles.haveWidth}>
              <div>
                <label>Expiration</label>
                <input
                  onChange={(e) => setExpiration(e.target.value)}
                  value={Expiration}
                />
              </div>
              <div>
                <label>CVV</label>
                <input onChange={(e) => setCVV(e.target.value)} value={CVV} />
              </div>
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
      <button
        disabled={!authSlice.Payment}
        className={`button is-info ${styles.pamentbtn}`}
        // type="submit"
        onClick={nextStep}
      >
        Next
      </button>
    </>
  );
};

export default Payment;
