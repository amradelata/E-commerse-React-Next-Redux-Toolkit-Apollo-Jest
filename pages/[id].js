import styles from "./singlePage.module.css";

const singlePage = (props) => {
  return (
    <>
      <div className={`${styles.dad} container`}>
        <div className={styles.start}>
          <p className="is-size-3">{props.broduct_data.name}</p>
          <p className="is-size-4">{props.broduct_data.price + " $"}</p>
        </div>
        <div className={styles.end}>
          <div
            className={styles.Image}
            style={{
              backgroundImage: `url(${props.broduct_data.img_url})`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
//ssr function
export async function getServerSideProps(context) {
  const res = await fetch(
    `https://vue-e-commerce-databse.herokuapp.com/products/${context.query.id}`
  );
  const broduct_data = await res.json();
  console.log(context.query);
  // // route guard useing dynamic routing data
  // if (broduct_data) {
  //   return {
  //     redirect: {
  //       destination: "/signin",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      broduct_data: broduct_data,
    }, // will be passed to the page component as props
  };
}

export default singlePage;
