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
              {/* <img src="https://i.pinimg.com/originals/d0/24/db/d024db91d8ed2df5341914d5279b303d.png" /> */}
              <a>logo</a>
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
          <li>
            <Link href="/profile">
              <a>profile</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/shop">SHOP</Link>
          </li> */}
        </ul>
        <div className="navbar-end">
          <ul className={styles.UL}>
            <li>
              <h1>
                {authSlice.isLoding ? (
                  <button onClick={() => logOutFunction()}>Log Out</button>
                ) : (
                  <Link href="/signin">Sign Up</Link>
                )}
              </h1>
            </li>
            <li>
              <Link href="/cart">
                <p>cart{" " + CartSlice.cart_products.length}</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
export default Nav;
