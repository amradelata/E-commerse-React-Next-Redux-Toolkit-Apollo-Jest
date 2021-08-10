const singlePage = (props) => {
  return (
    <>
      <div className="container">
        <img src={props.broduct_data.img_url} />
        <p>{props.broduct_data.name}</p>
        <p>{props.broduct_data.price}</p>
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
  console.log(broduct_data);
  //route guard useing dynamic routing data
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
