import styles from "./category.module.css";
import CategoriesSideNavBar from "../../components/CategoriesSideNavBar";
import ProductCard from "../../components/ProductCard";
import Image from "next/image";
const singlecategory = (props) => {
  if (!props.category)
    return (
      <div className={styles.loding}>
        <Image
          src="/./icons/loding.gif"
          alt="Picture of something nice"
          layout="fill"
          objectFit="cover"
        />
      </div>
    );

  return (
    <div className={`container is-fluid ${styles.parents}`}>
      <div className={styles.ProductNave}>
        <CategoriesSideNavBar />
      </div>
      <div className={styles.productsandProductsNav}>
        <div className={styles.myCards}>
          {props.category.map((item) => (
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
  );
};

export async function getStaticPaths() {
  return { paths: [], fallback: true }; // paths: []  = get all items id and stor them in opject
}

export async function getStaticProps(context) {
  if (context.params.category === "all") {
    const res = await fetch(`http://localhost:3001/products`);
    const category = await res.json();
    console.log(category);
    // Pass category data to the page via props
    return {
      props: { category },
      revalidate: 5, // build the page each 5 seconds, IF NEEDED (ISG)
    };
  } else {
    const res = await fetch(
      `http://localhost:3001/products?category=${context.params.category}`
    );
    const category = await res.json();
    console.log(category);
    // Pass category data to the page via props
    return {
      props: { category },
      revalidate: 5, // build the page each 5 seconds, IF NEEDED (ISG)
    };
  }
}
export default singlecategory;
