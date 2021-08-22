import { useSelector, useDispatch } from "react-redux";
import styles from "./Shipping.module.css";
import Checkout from "./Checkout";
import { useState } from "react";
import { useRouter } from "next/router";

const Payment = () => {
  const CartSlice = useSelector((state) => state.CartSlice);
  const router = useRouter();
  const [CardNumber, setCardNumber] = useState("");
  const [Owner, setOwner] = useState("");
  const [Expiration, setExpiration] = useState("");
  const [CVV, setCVV] = useState("");

  const [myDisabled, setmyDisabled] = useState(true);
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
      setmyDisabled(false);
    } else {
      setmyDisabled(true);
    }
  };
  const showFormfunction = () => {
    setmyDisabled(true);
    setshowForm(true);
  };
  const hiedFormFunction = () => {
    setshowForm(false);
    setmyDisabled(false);
  };
  return (
    <>
      <Checkout Payment={myDisabled} />
      <div className={styles.Checkout}>
        <div className={styles.pamentMethod}>
          <div class="control">
            <div>
              <label class="radio">
                <input type="radio" name="foobar" onClick={showFormfunction} />
                How would you like to pay{CartSlice.totalPrice + "$"}
                <img src="/./icons/visa.svg" />
                <img src="/./icons/mastercard.svg" />
              </label>
            </div>
            <div>
              <label class="radio">
                <input type="radio" name="foobar" onClick={hiedFormFunction} />
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

            {/*  */}
          </form>
        ) : (
          ""
        )}
      </div>
      <button
        disabled={myDisabled}
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
