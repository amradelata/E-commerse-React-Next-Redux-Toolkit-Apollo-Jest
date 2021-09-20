import styles from "./CategoriesSideNavBar.module.css";
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import Image from "next/Image";
const CategoriesSideNavBar = () => {
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
    <>
      <style jsx>{`
        .active:before {
          content: "";
          position: absolute;
          left: 0;
          width: 221px;
          height: 45px;
          background-color: #f0f0f096;
        }
      `}</style>
      <div className={styles.myCategoriesParents}>
        <p className={styles.navTag}>Categories</p>

        {listOfCategories.map((item) => (
          <ActiveLink
            activeClassName="active"
            href={`/category/${item.tag}`}
            key={item.id}
          >
            <a>
              <div className={styles.myCategories}>
                <div>
                  <Image
                    key={item.id}
                    src={item.img_url}
                    width={25}
                    height={30}
                    alt="tag"
                  ></Image>
                </div>
                <div>
                  <p>{item.tag}</p>
                </div>
              </div>
            </a>
          </ActiveLink>
        ))}
      </div>
    </>
  );
};

export default CategoriesSideNavBar;
