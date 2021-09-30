import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { getHomeProducts } from "../store/slices/products.slice";
import { useSelector, useDispatch } from "react-redux";
export default function Home() {
  const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeProducts());
  }, [dispatch]);

  return (
    <Layout productArray={ProdcutsSlice.productsArr} showPagination={true} />
  );
}
