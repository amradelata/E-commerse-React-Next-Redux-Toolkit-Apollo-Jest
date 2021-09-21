import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import CategoriesSideNavBar from "../components/CategoriesSideNavBar";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/Link";
import Loding from "../components/loding/Loding";
import EmptyProducts from "../components/EmptyProducts/EmptyProducts";
const Search = () => {
  const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);
  if (!ProdcutsSlice.productsArr) return <Loding />;
  if (ProdcutsSlice.productsArr.length === 0) {
    return <EmptyProducts title={"No products match your search"} />;
  }
  return (
    <>
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
      </div>
    </>
  );
};
export default Search;
