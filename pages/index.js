import { useEffect } from "react";
import { LoadProdcutsDataFromBackend } from "../store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./home.module.css";
// import { set_cart_array_value } from "../store/slices/cart.slice";
// import Header from "../components/Header";

export default function Home() {
  const dispatch = useDispatch();
  const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);

  useEffect(() => {
    // ANY reducer or thunk function MUST be called inside a dispatch()
    dispatch(LoadProdcutsDataFromBackend());
  }, []);

  // const addToCart = (product_obj) => {
  //   dispatch(set_cart_array_value(product_obj));
  // };

  return (
    <>
      <div>
        <div className="container">
          <div className="notification">
            We have <strong>good offers</strong> for you.
          </div>
        </div>
        {/* <Header /> */}
        {/* container card */}
        <div className={`container  ${styles.myCards}`}>
          {ProdcutsSlice.products_arr.map((item) => (
            <div key={item.id} className={`card ${styles.myCard}`}>
              <header className="card-header">
                <p className="card-header-title">Shop item</p>
              </header>
              <div className="card-content">
                <div className="card-image">
                  {/* <img style={{ backgroundImage: "url(item.img_url)" }}></img> */}
                  <img src={item.img_url}></img>
                </div>
                <p className="card-header-title">{item.name}</p>
              </div>
              <footer className="card-footer">
                {/* <button onClick={() => addToCart(item)}>add me to cart</button> */}
                <button className="card-footer-item">add me to cart</button>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
