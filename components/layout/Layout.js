import styles from "./Layout.module.css";
import CategoriesSideNavBar from "../CategoriesSideNavBar";
import ProductCard from "../ProductCard";
import EmptyProducts from "../EmptyProducts/EmptyProducts";
import Loding from "../loding/Loding";
import MyPagination from "../../components/MyPagination";

const Layout = (props) => {
  if (!props.productArray) return <Loding />;
  if (props.productArray.length === 0) {
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
            {props.productArray.map((item) => (
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
      {props.showPagination && <MyPagination />}
    </>
  );
};
export default Layout;
