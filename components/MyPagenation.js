import { useDispatch, useSelector } from "react-redux";
import { getProdcutsData } from "../store/slices/products.slice";
import { useEffect } from "react";
import styles from "./MyPagenation.module.css";
import Link from "next/link";

const MyPagenation = () => {
  const dispatch = useDispatch();
  const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);
  useEffect(() => {
    const num = ProdcutsSlice.pagesCount;
    const arraypagesCount = Array(num)
      .fill("-")
      .map((x, i) => i + 1);
  }, []);

  const next = () => {
    const pagenumper = ProdcutsSlice.nextPageNumber;
    dispatch(getProdcutsData(pagenumper));
  };
  const previous = () => {
    const pagenumper = ProdcutsSlice.previousPageNumber;
    dispatch(getProdcutsData(pagenumper));
  };
  return (
    <>
      <div className={styles.agenation}>
        <div className={styles.agenationContent}>
          <li onClick={() => previous()}>&#8249;</li>
          {/* <ul>
            <li>
              <Link href={`${ProdcutsSlice.previousPageNumber - 1}`}>
                <a>1</a>
              </Link>
            </li>
          </ul> */}

          <li onClick={() => next()}>&#8250;</li>
        </div>
      </div>
    </>
  );
};
export default MyPagenation;
