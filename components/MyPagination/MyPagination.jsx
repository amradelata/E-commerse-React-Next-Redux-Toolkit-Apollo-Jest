import styles from "./MyPagination.module.css";
import Link from "next/Link";
import ActiveLink from "../ActiveLink";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

const MyPagination = () => {
  const ProductsSlice = useSelector((state) => state.ProductsSlice);
  const [nextPtn, setNextPtn] = useState(false);
  const [previousPtn, setPreviousPtn] = useState(false);
  const myallPaginationData = ProductsSlice.allPaginationData;

  // using parse-link-header package to Parses a link header to array
  const parse = require("parse-link-header");
  const parsed = parse(myallPaginationData);

  const myAllPages = parsed?.last?._page;
  const myNextNumber = parsed?.next?._page;
  const myPreviousNumber = parsed?.prev?._page;
  const pagesCount = Array.from({ length: myAllPages }, (_, i) => i + 1); //convert my all pages number to array

  useEffect(() => {
    {
      //if my data dont contain prev hied perv ptn
      parsed?.prev ? setPreviousPtn(true) : setPreviousPtn(false);
    }
    {
      //if my data dont contain next hied next ptn
      parsed?.next ? setNextPtn(true) : setNextPtn(false);
    }
  }, [parsed?.prev, parsed?.next]);
  return (
    <>
      <div className={styles.pagination}>
        <div className={styles.paginationContent}>
          {previousPtn && (
            <Link href={`/products/${myPreviousNumber}`} passHref>
              <a>
                <li>&#8249;</li>
              </a>
            </Link>
          )}
          <ul>
            {pagesCount.map((item) => (
              <ActiveLink
                activeClassName={styles.active}
                href={item === 1 ? "/" : `/products/${item}`}
                key={item}
              >
                <a>
                  <li>{item}</li>
                </a>
              </ActiveLink>
            ))}
          </ul>

          {nextPtn && (
            <Link href={`/products/${myNextNumber}`} passHref>
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
