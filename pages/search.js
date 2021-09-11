import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import CategoriesSideNavBar from "../components/CategoriesSideNavBar";
import styles from "./index.module.css";

const search = () => {
  const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);
  if (!ProdcutsSlice.productsArr)
    return (
      // <div className={styles.loding}>
      <img src="/./icons/loding.gif" />
      // </div>
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
    <>
      <div className={`container is-fluid ${styles.dad}`}>
        <div className={styles.ProductNave}>
          <CategoriesSideNavBar />
        </div>

        <div className={styles.myCards}>
          {ProdcutsSlice.productsArr.map((item) => (
            <ProductCard
              key={item.id}
              in_my_cart={item.in_my_cart}
              discount={item.discount}
              id={item.id}
              img_url={item.img_url}
              name={item.name}
              category={item.category}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default search;
