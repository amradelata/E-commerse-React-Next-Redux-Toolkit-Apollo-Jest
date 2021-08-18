import { useEffect } from "react";
import { getProdcutsData } from "../store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./home.module.css";
import { set_cart_array_value } from "../store/slices/cart.slice";
import Link from "next/link";
// import Header from "../components/Header";

export default function Home() {
  const dispatch = useDispatch();
  const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);
  const authSlice = useSelector((state) => state.authSlice);

  useEffect(() => {
    // ANY reducer or thunk function MUST be called inside a dispatch()
    dispatch(getProdcutsData());
  }, []);

  const addToCart = (product_obj) => {
    dispatch(set_cart_array_value(product_obj));
  };

  return (
    <div>
      <div className="container is-fluid">
        <div className="notification">
          We have <strong>good offers</strong> for you.
        </div>
      </div>

      <div className={`container is-fluid ${styles.myCards}`}>
        {ProdcutsSlice.productsArr.map((item) => (
          <div key={item.id} className={`card ${styles.myCard}`}>
            <Link href={`/${item.id}`} passHref>
              <a>
                <header className="card-header">
                  <p className="card-header-title">Shop item</p>
                </header>
                <div className="card-content">
                  <div>
                    <div
                      className={styles.Image}
                      style={{
                        backgroundImage: `url(${item.img_url})`,
                      }}
                    ></div>
                  </div>
                  <p className="card-header-title">
                    {item.name + " "}
                    {"  /  " + item.price + "$"}
                  </p>
                </div>
              </a>
            </Link>
            <footer className="card-footer">
              {authSlice.isLogIn ? (
                <button
                  className="card-footer-item button is-success"
                  onClick={() => addToCart(item)}
                >
                  add me to cart
                </button>
              ) : (
                ""
              )}
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
}
