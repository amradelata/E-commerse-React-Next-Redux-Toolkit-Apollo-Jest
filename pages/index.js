import { useEffect } from "react";
import { getProdcutsData } from "../store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import CategoriesSideNavBar from "../components/CategoriesSideNavBar";
import ProductCard from "../components/ProductCard";
import Image from "next/image";
import MyPagination from "../components/MyPagination";

export default function Home(props) {
  const dispatch = useDispatch();
  const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);
  const authSlice = useSelector((state) => state.authSlice);

  useEffect(() => {
    dispatch(getProdcutsData());
  }, [dispatch]);
  // ProdcutsSlice.productsArr

  if (!ProdcutsSlice.productsArr)
    return (
      <div className={styles.loding}>
        {/* <img src="/./icons/loding.gif" /> */}
        <Image
          src="/./icons/loding.gif"
          alt="Picture of something nice"
          layout="fill"
          objectFit="cover"
        />
      </div>
    );
  if (ProdcutsSlice.productsArr.length === 0) {
    return (
      <div className={styles.emptySearch}>
        <p>No products match your search</p>
        <p>search: shoes,coat or suit</p>

        <Image
          src="/./icons/illustrations/no-data.svg"
          alt="no-data"
          width="300"
          height="500"
        />
      </div>
    );
  }
  return (
    <div className={`container is-fluid ${styles.parents}`}>
      <div className={styles.ProductNave}>
        <CategoriesSideNavBar />
      </div>

      <div className={styles.productsandProductsNav}>
        <div className={styles.myCards}>
          {ProdcutsSlice.productsArr.map((item) => (
            <ProductCard
              key={item.id}
              in_my_cart={item.in_my_cart}
              id={item.id}
              img_url={item.img_url}
              name={item.name}
              category={item.category}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </div>
        <MyPagination />
      </div>
    </div>
  );
}
