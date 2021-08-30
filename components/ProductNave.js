import styles from "./ProductNave.module.css";
import Link from "next/link";
const ProductNave = () => {
  const listOfCategories = [
    {
      img_url: "/./icons/categories/select-all.svg",
      tag: "all",
      active: false,
      id: "1",
    },
    {
      img_url: "/./icons/categories/shoes.svg",
      tag: "Shoes",
      active: false,
      id: "12",
    },
    {
      img_url: "/./icons/categories/pants.svg",
      tag: "Pants",
      active: false,
      id: "13",
    },
    {
      img_url: "/./icons/categories/t-shirt.svg",
      tag: "T-shirt",
      active: false,
      id: "14",
    },
    {
      img_url: "/./icons/categories/shirt.svg",
      tag: "Shirt",
      active: false,
      id: "15",
    },
    {
      img_url: "/./icons/categories/jacket.svg",
      tag: "Jacket",
      active: false,
      id: "16",
    },
    {
      img_url: "/./icons/categories/blazer.svg",
      tag: "Blazer",
      active: false,
      id: "17",
    },
    {
      img_url: "/./icons/categories/coat.svg",
      tag: "Coat",
      active: false,
      id: "18",
    },
    {
      img_url: "/./icons/categories/suit.svg",
      tag: "Suit",
      active: false,
      id: "19",
    },
  ];
  return (
    <div className={styles.myCategoriesDad}>
      <p className={`is-size-4 ${styles.navTag}`}>Categories</p>
      {listOfCategories.map((item) => (
        <Link href={`/category/${item.tag}`} key={item.id}>
          <a>
            <div className={styles.myCategories}>
              <div>
                <img className={styles.Img} src={item.img_url} />
              </div>
              <div className={styles.navTag}>
                <p>{item.tag}</p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ProductNave;
