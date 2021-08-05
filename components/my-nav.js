import { Fragment } from "react";
import styles from "./myNavBar.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

const Nav = () => {
  const CartSlice = useSelector((state) => state.CartSlice);
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
          {/* <li>
            <Link href="/shop">SHOP</Link>
          </li> */}
        </ul>
        <div className="navbar-end">
          <ul className={styles.UL}>
            <li>
              <p>login</p>
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
