import { useState, useEffect } from "react";
import styles from "./MyPagination.module.css";
import Link from "next/Link";
import ActiveLink from "./ActiveLink";

const MyPagination = (props) => {
  const [previousptn, setpreviousptn] = useState(true);
  const [nextptn, setnextptn] = useState(true);
  const [nextNumber, setnextNumber] = useState(0);
  const [previousNumber, setpreviousNumber] = useState(0);
  useEffect(() => {
    //if there is no next include hide next btn
    {
      props.paginatData.includes("next") ? setnextptn(true) : setnextptn(false);
    }
    //if there is no prev include hide prev btn
    {
      props.paginatData.includes("prev")
        ? setpreviousptn(true)
        : setpreviousptn(false);
    }
    //useing parse-link-header package to Parses a link header to array
    const parse = require("parse-link-header");
    const parsed = parse(props.paginatData);
    console.log(parsed);
    //add the nextNumber dynamic if he is here
    {
      props.paginatData.includes("next") && setnextNumber(parsed.next._page);
    }
    //add the previousNumber dynamic if he is here
    {
      props.paginatData.includes("prev") &&
        setpreviousNumber(parsed.prev._page);
    }
  }, [nextptn, previousptn, props]);

  return (
    <>
      <div className={styles.pagination}>
        <div className={styles.paginationContent}>
          {previousptn && (
            <Link href={`/products/${previousNumber}`} passHref>
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

          {nextptn && (
            <Link href={`/products/${nextNumber}`} passHref>
              <a>
                <li>&#8250; </li>
              </a>
            </Link>
          )}
          {/* <p>{props.paginatData}</p> */}
        </div>
      </div>
    </>
  );
};
export default MyPagination;
