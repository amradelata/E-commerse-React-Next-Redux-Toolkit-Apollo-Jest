import styles from "./Shipping.module.css";
import CheckOut from "../../components/CheckOut/CheckOut";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { checkoutShipping } from "../../store/slices/auth";

const Shipping = () => {
  const AuthSlice = useSelector((state) => state.AuthSlice);

  const router = useRouter();
  const [FirstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [Countries, setCountries] = useState("");
  const [Phone, setPhone] = useState("");
  const [Postcode, setPostcode] = useState("");
  const [City, setCity] = useState("");
  const [Address, setAddress] = useState("");
  const [Nearest, setNearest] = useState("");

  const dispatch = useDispatch();
  const nextStep = (e) => {
    e.preventDefault();

    router.push("/checkout/payment");
  };

  const Disabled = () => {
    if (
      FirstName.length >= 1 &&
      lastName.length >= 1 &&
      email.length >= 1 &&
      Countries.length >= 1 &&
      Phone.length >= 1 &&
      Postcode.length >= 1 &&
      City.length >= 1 &&
      Address.length >= 1 &&
      Nearest.length >= 1
    ) {
      dispatch(checkoutShipping(true));
    } else {
      dispatch(checkoutShipping(false));
    }
  };
  return (
    <>
      <CheckOut />
      <div className={styles.Checkout}>
        <form className={styles.MyForm} onSubmit={nextStep} onChange={Disabled}>
          <div className={styles.Personal}>
            <p>Personal information</p>

            <div className={styles.haveWidth}>
              <div>
                <label>First name</label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  value={FirstName}
                />
              </div>
              <div>
                <label>Last name</label>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </div>
            </div>

            <div className={styles.fullWidth}>
              <label>Email</label>
              <input onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
          </div>
          <div className={styles.Contact}>
            <p>Contact information</p>
            <div className={styles.haveWidth}>
              <div>
                <label>Countries</label>
                <input
                  onChange={(e) => setCountries(e.target.value)}
                  value={Countries}
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={Phone}
                />
              </div>
            </div>
            <div className={styles.haveWidth}>
              <div>
                <label>Postcode</label>
                <input
                  onChange={(e) => setPostcode(e.target.value)}
                  value={Postcode}
                />
              </div>
              <div>
                <label>town/City</label>
                <input onChange={(e) => setCity(e.target.value)} value={City} />
              </div>
            </div>
            <div className={styles.fullWidth}>
              <label>Address</label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                value={Address}
              />
            </div>
            <div className={styles.fullWidth}>
              <label>Nearest Landmark</label>
              <input
                onChange={(e) => setNearest(e.target.value)}
                value={Nearest}
              />
            </div>

            <button
              disabled={!AuthSlice.Shipping}
              className={styles.nextStepBtn}
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Shipping;
