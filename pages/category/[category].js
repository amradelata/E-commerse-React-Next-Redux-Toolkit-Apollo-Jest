// import { useEffect } from "react";
// import { getProdcutsData } from "../../store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./category.module.css";
import { set_cart_array_value } from "../../store/slices/cart.slice";
import Link from "next/link";
import ProductNave from "../../components/ProductNave";
const singlecategory = (props) => {
  if (!props.category) return "Loding";
  const dispatch = useDispatch();
  // const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);
  const authSlice = useSelector((state) => state.authSlice);

  // useEffect(() => {
  //   // ANY reducer or thunk function MUST be called inside a dispatch()
  //   dispatch(getProdcutsData());
  // }, []);

  const addToCart = (product_obj) => {
    dispatch(set_cart_array_value(product_obj));
  };

  return (
    <div className={`container is-fluid ${styles.dad}`}>
      <div className={styles.ProductNave}>
        <ProductNave />
      </div>

      <div className={styles.myCards}>
        {props.category.map((item) => (
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
};

export async function getStaticPaths() {
  return { paths: [], fallback: true }; // paths: []  = get all items id and stor them in opject
}

export async function getStaticProps(context) {
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
export default singlecategory;
