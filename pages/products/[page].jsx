import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getHomeProducts } from "../../store/slices/products.slice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
const Page = () => {
  const ProductsSlice = useSelector((state) => state.ProductsSlice);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const pageNumber = router.query.page;
    dispatch(getHomeProducts(pageNumber));
  }, [dispatch, router.query]);

  return (
    <>
      <Layout productArray={ProductsSlice.productsArr} showPagination={true} />
    </>
  );
};

export default Page;
