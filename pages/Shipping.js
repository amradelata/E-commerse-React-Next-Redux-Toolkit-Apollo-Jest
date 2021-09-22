import styles from "./Shipping.module.css";
import CheckOut from "../components/CheckOut/CheckOut";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { chickOutShipping } from "../store/slices/auth";

const Shipping = () => {
  const authSlice = useSelector((state) => state.authSlice);

  const router = useRouter();
  const [FirstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [Countrys, setCountrys] = useState("");
  const [Phone, setPhone] = useState("");
  const [Postcode, setPostcode] = useState("");
  const [City, setCity] = useState("");
  const [Address, setAddress] = useState("");
  const [Nearest, setNearest] = useState("");

  const dispatch = useDispatch();
  const nextStep = (e) => {
    e.preventDefault();

    router.push("/payment");
  };

  const desapuld = () => {
    if (
      FirstName.length >= 1 &&
      lastName.length >= 1 &&
      email.length >= 1 &&
      Countrys.length >= 1 &&
      Phone.length >= 1 &&
      Postcode.length >= 1 &&
      City.length >= 1 &&
      Address.length >= 1 &&
      Nearest.length >= 1
    ) {
      dispatch(chickOutShipping(true));
    } else {
      dispatch(chickOutShipping(false));
    }
  };
  return (
    <>
      <CheckOut />
      <div className={styles.Checkout}>
        <form className={styles.MyForm} onSubmit={nextStep} onChange={desapuld}>
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
              <input onChange={(e) => setemail(e.target.value)} value={email} />
            </div>
          </div>
          <div className={styles.Contact}>
            <p>Contact information</p>
            <div className={styles.haveWidth}>
              <div>
                <label>Countrys</label>
                <input
                  onChange={(e) => setCountrys(e.target.value)}
                  value={Countrys}
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
              disabled={!authSlice.Shipping}
              className={`button is-info ${styles.Formbutton}`}
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
