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
    let element = document.getElementById("dropdown-menu");
    element.classList.toggle("is-active");
    router.push("/");
  };
  const toggleDropdown = () => {
    let element = document.getElementById("dropdown-menu");
    element.classList.toggle("is-active");
  };
  return (
    <>
      <div className="container is-fluid navbar">
        <ul className={styles.UL}>
          <li>
            <Link href="/">
              <a className={styles.myLink}>SHOP</a>
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
              <a className={styles.myLink}>ABOUT</a>
            </Link>
          </li>
          {authSlice.isLogIn ? (
            <li>
              <Link href="/profile">
                <a className={styles.myLink}>profile</a>
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
        <div className="navbar-end">
          <ul className={styles.UL}>
            <li>
              {/* //search */}

              <div className={styles.searchBox}>
                <input
                  className={styles.searchText}
                  type="text"
                  placeholder="Search Anything"
                />
                <button className={styles.searchBtn}>
                  <img src="/./icons/search.svg" />
                </button>
              </div>
            </li>
            <li>
              <div id="dropdown-menu" className="dropdown ">
                <div className="dropdown-trigger">
                  <button className={styles.searchBtn} onClick={toggleDropdown}>
                    <img src="/./icons/avatar.svg" className={styles.avatar} />
                  </button>
                </div>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    {authSlice.isLogIn ? (
                      <li>
                        <Link href="/profile">
                          <a className="dropdown-item">profile</a>
                        </Link>
                      </li>
                    ) : (
                      ""
                    )}
                    <Link href="/about">
                      <a className="dropdown-item">ABOUT</a>
                    </Link>

                    {!authSlice.isLogIn ? (
                      <a href="#" className="dropdown-item">
                        <Link href="/login">Log In</Link>
                      </a>
                    ) : (
                      ""
                    )}

                    {authSlice.isLogIn ? (
                      <a
                        href="#"
                        className="dropdown-item"
                        onClick={() => logOutFunction()}
                      >
                        Log Out
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </li>
            {authSlice.isLogIn ? (
              <li className={styles.cartPtn}>
                <Link href="/Cart">
                  <a>
                    <button className={styles.searchBtn}>
                      <img src="/./icons/cart.svg" className={styles.avatar} />
                      <span className={styles.cartNum}>
                        {" " + CartSlice.cart_products.length}
                      </span>
                    </button>
                  </a>
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Nav;
