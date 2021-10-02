import Layout from "../../components/Layout/Layout";
const singlecategory = (props) => {
  return (
    <>
      <Layout productArray={props.category} />
    </>
  );
};

export async function getStaticPaths() {
  return { paths: [], fallback: true }; // paths: []  = get all items id and stor them in opject
}

export async function getStaticProps(context) {
  const res = await fetch(
    // `http://localhost:3001/products?category=${context.params.category}`
    `http://localhost:3001/products${
      context.params.category === "all"
        ? ""
        : `?category=${context.params.category}`
    }`
  );
  const category = await res.json();

  // Pass category data to the page via props
  return {
    props: { category },
    revalidate: 5, // build the page each 5 seconds, IF NEEDED (ISG)
  };
}
export default singlecategory;
