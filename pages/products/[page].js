import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getHomeProducts } from "../../store/slices/products.slice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
const Page = () => {
  const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const pagenumper = router.query.page;
    dispatch(getHomeProducts(pagenumper));
  }, [dispatch, router.query]);

  return (
    <>
      <Layout productArray={ProdcutsSlice.productsArr} showPagination={true} />
    </>
  );
};

export default Page;
