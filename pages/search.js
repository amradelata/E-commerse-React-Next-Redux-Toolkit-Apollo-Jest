import { useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";
const Search = () => {
  const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);

  return (
    <>
      <Layout productArray={ProdcutsSlice.productsArr} />
    </>
  );
};
export default Search;
