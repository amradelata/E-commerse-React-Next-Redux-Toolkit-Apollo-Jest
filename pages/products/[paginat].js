import styles from "../category/category.module.css";
import CategoriesSideNavBar from "../../components/CategoriesSideNavBar";
import ProductCard from "../../components/ProductCard";
import { useEffect } from "react";
import MyPagination from "../../components/MyPagination";
import { useDispatch } from "react-redux";
import { paginatData } from "../../store/slices/products.slice";
import EmptyProducts from "../../components/EmptyProducts/EmptyProducts";
import Loding from "../../components/loding/Loding";
import axios from "axios";
const Paginat = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(props.paginatData, props.paramsdata);
    dispatch(paginatData(props.paginatData)); //add paginatData data on global store
  }, [dispatch, props]);
  if (!props.product) {
    return <Loding />;
  }
  const letters = /^[A-Za-z]+$/;
  if (props.product.length === 0 || props.paramsdata.match(letters)) {
    return <EmptyProducts title={"No more products"} />;
  }
  return (
    <div className={`container is-fluid ${styles.parents}`}>
      <div className={styles.ProductNave}>
        <CategoriesSideNavBar />
      </div>
      <div className={styles.productsandProductsNav}>
        <div className={styles.myCards}>
          {props.product.map(
            (
              item //loop on the return products
            ) => (
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
            )
          )}
        </div>

        <MyPagination />
      </div>
    </div>
  );
};
export async function getStaticPaths() {
  return { paths: [], fallback: true }; // paths: []  = get all items id and stor them in opject
}

export async function getStaticProps(context) {
  try {
    const response = await axios.get(
      `http://localhost:3001/products?_page=${context.params.paginat}&_limit=12`
    );
    // handle success
    // console.log(response.headers.link); //to see this log open the cmd
    const product = await response.data;
    const paginatData = await response.headers.link;
    const paramsdata = context.params.paginat;
    return {
      props: { product, paginatData, paramsdata },
      revalidate: 5, // build the page each 5 seconds, IF NEEDED (ISG)
    };
  } catch (error) {
    // handle error
  }
}

export default Paginat;
