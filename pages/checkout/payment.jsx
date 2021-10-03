import { useSelector, useDispatch } from "react-redux";
import styles from "./Shipping.module.css";
import CheckOut from "../../components/CheckOut/CheckOut";
import { useState } from "react";
import { useRouter } from "next/router";
import { checkoutPayment } from "../../store/slices/auth";
import Image from "next/image";

const Payment = () => {
  const CartSlice = useSelector((state) => state.CartSlice);
  const AuthSlice = useSelector((state) => state.AuthSlice);
  const dispatch = useDispatch();
  const router = useRouter();
  const [CardNumber, setCardNumber] = useState("");
  const [Owner, setOwner] = useState("");
  const [Expiration, setExpiration] = useState("");
  const [CVV, setCVV] = useState("");

  const [showForm, setShowForm] = useState(true);
  const nextStep = (e) => {
    e.preventDefault();

    router.push("/checkout/done");
  };

  const Disabled = () => {
    if (
      CardNumber.length >= 1 &&
      Owner.length >= 1 &&
      Expiration.length >= 1 &&
      CVV.length >= 1
    ) {
      dispatch(checkoutPayment(true));
    } else {
      dispatch(checkoutPayment(false));
    }
  };
  const showFormFunction = () => {
    dispatch(checkoutPayment(false));
    setShowForm(true);
  };
  const hiedFormFunction = () => {
    setShowForm(false);

    dispatch(checkoutPayment(true));
  };
  return (
    <>
      <CheckOut />
      <div>
        <div className={styles.paymentMethod}>
          <div className="control">
            <div>
              <label className={styles.myLabelRadio}>
                <input
                  type="radio"
                  className={styles.myRadioInput}
                  name="foobar"
                  onClick={showFormFunction}
                />
                How would you like to pay{" " + CartSlice.totalPrice + "$"}
                <div className={styles.parent}>
                  <Image
                    className={styles.img}
                    src="/./icons/visa.svg"
                    alt="visa"
                    width="40"
                    height="35"
                  />
                  <Image
                    className={styles.img}
                    src="/./icons/mastercard.svg"
                    alt="mastercard"
                    width="40"
                    height="35"
                  />
                </div>
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

        <form className={styles.MyForm} onChange={Disabled}>
          {showForm && (
            <div>
              <div className={styles.fullWidth}>
                <label>Card Number</label>
                <input
                  onChange={(e) => setCardNumber(e.target.value)}
                  value={CardNumber}
                />
              </div>

              <div className={styles.fullWidth}>
                <label>Owner</label>
                <input
                  onChange={(e) => setOwner(e.target.value)}
                  value={Owner}
                />
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
            </div>
          )}
          <button
            disabled={!AuthSlice.Payment}
            className={styles.nextStepBtn}
            onClick={nextStep}
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default Payment;
