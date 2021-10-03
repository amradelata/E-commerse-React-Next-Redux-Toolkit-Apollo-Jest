import { useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";
const Search = () => {
  const ProductsSlice = useSelector((state) => state.ProductsSlice);

  return (
    <>
      <Layout productArray={ProductsSlice.productsArr} />
    </>
  );
};
export default Search;
