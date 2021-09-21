import styles from "./MyPagination.module.css";
import Link from "next/Link";
import ActiveLink from "./ActiveLink";
import { useSelector } from "react-redux";

const MyPagination = () => {
  const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);

  return (
    <>
      <div className={styles.pagination}>
        <div className={styles.paginationContent}>
          {ProdcutsSlice.previousptn && (
            <Link href={`/products/${ProdcutsSlice.previousNumber}`} passHref>
              <a>
                <li>&#8249;</li>
              </a>
            </Link>
          )}
          <ul>
            <style jsx>{`
              .active li {
                position: relative;
                border-radius: 6px;
                display: inline-block;
                width: 50px;
                line-height: 50px;
                text-align: center;
                height: 50px;
                background-color: #371f72;
                font-size: 20px;
                font-weight: bold;
                cursor: pointer;
                margin: 0 10px;
                transition: 0.6s;
                color: antiquewhite;
                outline: none;
              }
            `}</style>
            <ActiveLink activeClassName="active" href="/products/1" passHref>
              <a>
                <li>1</li>
              </a>
            </ActiveLink>

            <ActiveLink activeClassName="active" href="/products/2" passHref>
              <a>
                <li>2</li>
              </a>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/products/3" passHref>
              <a>
                <li>3</li>
              </a>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/products/4" passHref>
              <a>
                <li>4</li>
              </a>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/products/5" passHref>
              <a>
                <li>5</li>
              </a>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/products/6" passHref>
              <a>
                <li>6</li>
              </a>
            </ActiveLink>
          </ul>

          {ProdcutsSlice.nextptn && (
            <Link href={`/products/${ProdcutsSlice.nextNumber}`} passHref>
              <a>
                <li>&#8250; </li>
              </a>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default MyPagination;
