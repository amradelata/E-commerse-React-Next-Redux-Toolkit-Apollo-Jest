import { useState, useEffect } from "react";
import styles from "./MyPagination.module.css";
import Link from "next/Link";

const MyPagination = (props) => {
  const [previousptn, setpreviousptn] = useState(true);
  const [nextptn, setnextptn] = useState(true);
  const [nextNumber, setnextNumber] = useState(0);
  const [previousNumber, setpreviousNumber] = useState(0);
  useEffect(() => {
    {
      props.paginatData.includes("next") ? setnextptn(true) : setnextptn(false);
    }
    {
      props.paginatData.includes("prev")
        ? setpreviousptn(true)
        : setpreviousptn(false);
    }
    const parse = require("parse-link-header");
    const parsed = parse(props.paginatData);
    {
      props.paginatData.includes("next") && setnextNumber(parsed.next._page);
    }
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
            <Link href="/products/1" passHref>
              <a>
                <li>1</li>
              </a>
            </Link>

            <Link href="/products/2" passHref>
              <a>
                <li>2</li>
              </a>
            </Link>
            <Link href="/products/3" passHref>
              <a>
                <li>3</li>
              </a>
            </Link>
            <Link href="/products/4" passHref>
              <a>
                <li>4</li>
              </a>
            </Link>
            <Link href="/products/5" passHref>
              <a>
                <li>5</li>
              </a>
            </Link>
            <Link href="/products/6" passHref>
              <a>
                <li>6</li>
              </a>
            </Link>
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
