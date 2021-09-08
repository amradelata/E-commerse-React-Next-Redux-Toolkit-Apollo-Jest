import { useEffect, useRef, useState } from "react";
import { getProdcutsData } from "../store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import { set_cart_array_value } from "../store/slices/cart.slice";
import { set_in_my_cart } from "../store/slices/products.slice";
import Link from "next/link";
import CategoriesSideNavBar from "../components/CategoriesSideNavBar";
import ProductCard from "../components/ProductCard";

// import Header from "../components/Header";

export default function Home() {
  const addToCartBtn = useRef();
  const dispatch = useDispatch();
  const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);
  const authSlice = useSelector((state) => state.authSlice);
  const CartSlice = useSelector((state) => state.CartSlice);
  const [showNotification, setshowNotification] = useState(false);

  useEffect(() => {
    // ANY reducer or thunk function MUST be called inside a dispatch()
    dispatch(getProdcutsData());
  }, []);

  if (!ProdcutsSlice.productsArr)
    return (
      <div className={styles.loding}>
        <img src="/./icons/loding.gif" />
      </div>
    );
  if (ProdcutsSlice.productsArr.length === 0) {
    return (
      <div className={styles.emptySearch}>
        <p>No products match your search</p>
        <p>search: shoes,coat or suit</p>
        <img src="/./icons/illustrations/no-data.svg" />
      </div>
    );
  }
  return (
    <div className={`container is-fluid ${styles.dad}`}>
      <div className={styles.ProductNave}>
        <CategoriesSideNavBar />
      </div>

      <div className={styles.myCards}>
        {ProdcutsSlice.productsArr.map((item, index) => (
          <ProductCard
            id={item.id}
            img_url={item.img_url}
            name={item.name}
            category={item.category}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
