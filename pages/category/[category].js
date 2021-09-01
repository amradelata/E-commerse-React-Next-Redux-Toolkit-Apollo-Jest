// import { useEffect } from "react";
// import { getProdcutsData } from "../../store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styles from "./category.module.css";
import { set_cart_array_value } from "../../store/slices/cart.slice";
import Link from "next/link";
import ProductNave from "../../components/ProductNave";
const singlecategory = (props) => {
  const [showNotification, setshowNotification] = useState(false);
  if (!props.category) return "Loding";
  const dispatch = useDispatch();
  // const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);
  const authSlice = useSelector((state) => state.authSlice);

  // useEffect(() => {
  //   // ANY reducer or thunk function MUST be called inside a dispatch()
  //   dispatch(getProdcutsData());
  // }, []);

  const addToCart = (item, index) => {
    dispatch(set_cart_array_value({ item, index }));
    setshowNotification(true);
    setTimeout(() => setshowNotification(false), 2000);
  };

  return (
    <div className={`container is-fluid ${styles.dad}`}>
      {showNotification && (
        <div className={`notification is-success ${styles.showNotification}`}>
          product added to cart
        </div>
      )}
      <div className={styles.ProductNave}>
        <ProductNave />
      </div>

      <div className={styles.myCards}>
        {props.category.map((item, index) => (
          <div key={item.id} className={`card ${styles.myCard}`}>
            <Link href={`/${item.id}`} passHref>
              <a>
                <div className="card-content">
                  <div>
                    <div
                      className={styles.Image}
                      style={{
                        backgroundImage: `url(${item.img_url})`,
                      }}
                    ></div>
                  </div>
                  <p className={styles.category}>{item.category}</p>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemPrice}>{item.price + " $"}</p>
                </div>
              </a>
            </Link>
            {authSlice.isLogIn && !item.in_my_cart ? (
              <footer className="card-content">
                <button
                  className={styles.itemButton}
                  onClick={() => addToCart(item, index)}
                >
                  add to cart
                </button>
              </footer>
            ) : (
              ""
            )}
          </div>
        ))}
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
