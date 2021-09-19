import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import CategoriesSideNavBar from "../components/CategoriesSideNavBar";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/Link";
const Search = () => {
  const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);
  if (!ProdcutsSlice.productsArr)
    return (
      <Image
        src="/./icons/loding.gif"
        alt="Picture of something nice"
        layout="fill"
        objectFit="cover"
      />
    );
  if (ProdcutsSlice.productsArr.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No products match your search</p>
        <p>search: shoes,coat or suit</p>

        <Image
          src="/./icons/illustrations/no-data.svg"
          alt="empty"
          width="400"
          height="400"
        />
        <Link href="/" passHref>
          <a>
            <button>Go to shopping</button>
          </a>
        </Link>
      </div>
    );
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
