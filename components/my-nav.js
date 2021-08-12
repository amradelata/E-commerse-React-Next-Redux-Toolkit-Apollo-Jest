import { Fragment } from "react";
import styles from "./myNavBar.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../store/slices/auth";
import { useRouter } from "next/router";
const Nav = () => {
  const router = useRouter();
  const authSlice = useSelector((state) => state.authSlice);
  const CartSlice = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();
  const logOutFunction = () => {
    dispatch(logOut());
    router.push("/");
  };
  return (
    <Fragment>
      <div className="container navbar">
        <ul className={styles.UL}>
          <li>
            <Link href="/">
              <a>Logo</a>
            </Link>
          </li>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <li>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
          {authSlice.isLoding ? (
            <li>
              <Link href="/profile">
                <a>profile</a>
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
        <div className="navbar-end">
          <ul className={styles.UL}>
            <li>
              {authSlice.isLoding ? (
                <button className="button" onClick={() => logOutFunction()}>
                  Log Out
                </button>
              ) : (
                <Link href="/signin">Sign Up</Link>
              )}
            </li>
            <li>
              <Link href="/cart">
                <p>
                  cart{" "}
                  {CartSlice.totalPrice ? (
                    <span className={styles.cartNum}>
                      {" " + CartSlice.cart_products.length}
                    </span>
                  ) : (
                    ""
                  )}
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
export default Nav;
