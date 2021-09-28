import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { paginatData } from "../../store/slices/products.slice";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
const Paginat = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(paginatData(props.paginatData)); //add paginatData data on global store
  }, [dispatch, props]);

  return (
    <>
      <Layout productArray={props.product} showPagination={true} />
    </>
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
