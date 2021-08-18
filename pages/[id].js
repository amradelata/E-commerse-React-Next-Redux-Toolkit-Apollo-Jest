import styles from "./singlePage.module.css";

const singlePage = (props) => {
  if (!props.product) return "Loding";
  return (
    <>
      <div className={`${styles.dad} container`}>
        <div className={styles.start}>
          <p className="is-size-3">{props.product.name}</p>
          <p className="is-size-4">{props.product.price + " $"}</p>
        </div>
        <div className={styles.end}>
          <div
            className={styles.Image}
            style={{
              backgroundImage: `url(${props.product.img_url})`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  return { paths: [], fallback: true }; // paths: []  = get all items id and stor them in opject
}

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:3001/products/${context.params.id}`
  );
  const product = await res.json();
  // Pass product data to the page via props
  return {
    props: { product },
    revalidate: 5, // build the page each 5 seconds, IF NEEDED (ISG)
  };
}

export default singlePage;
