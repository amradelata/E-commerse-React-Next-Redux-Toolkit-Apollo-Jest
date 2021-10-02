import styles from "./MyPagination.module.css";
import Link from "next/Link";
import ActiveLink from "../ActiveLink";
import { useSelector } from "react-redux";
import ProdcutsSlice from "../../store/slices/products.slice";
import React, { useState, useEffect } from "react";

const MyPagination = () => {
  const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);
  const [nextptn, setnextptn] = useState(false);
  const [previousptn, setpreviousptn] = useState(false);
  const myallpaginatData = ProdcutsSlice.allpaginatData;

  // useing parse-link-header package to Parses a link header to array
  const parse = require("parse-link-header");
  const parsed = parse(myallpaginatData);

  const myallpages = parsed?.last?._page;
  const mynextNumber = parsed?.next?._page;
  const mypreviousNumber = parsed?.prev?._page;
  const pagesCount = Array.from({ length: myallpages }, (_, i) => i + 1); //convert my all pages numper to array

  useEffect(() => {
    {
      //if my data dont contain prev hied perv ptn
      parsed?.prev ? setpreviousptn(true) : setpreviousptn(false);
    }
    {
      //if my data dont contain next hied next ptn
      parsed?.next ? setnextptn(true) : setnextptn(false);
    }
  }, [parsed?.prev, parsed?.next]);
  return (
    <>
      <div className={styles.pagination}>
        <div className={styles.paginationContent}>
          {previousptn && (
            <Link href={`/products/${mypreviousNumber}`} passHref>
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
            {pagesCount.map((item) => (
              <ActiveLink
                activeClassName="active"
                href={item === 1 ? "/" : `/products/${item}`}
                passHref
                key={item}
              >
                <a>
                  <li>{item}</li>
                </a>
              </ActiveLink>
            ))}
          </ul>

          {nextptn && (
            <Link href={`/products/${mynextNumber}`} passHref>
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
