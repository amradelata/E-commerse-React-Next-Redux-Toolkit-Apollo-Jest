import { style } from "dom-helpers";
import { useDispatch, useSelector } from "react-redux";
import {
  getProdcutsData,
  setPagenation,
  getPagenationProdcutsData,
} from "../store/slices/products.slice";
import { useEffect, useState } from "react";
import styles from "./MyPagenation.module.css";
import Link from "next/link";

const MyPagenation = () => {
  const dispatch = useDispatch();
  const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);
  const [previousptn, setpreviousptn] = useState(true);
  const [nextptn, setnextptn] = useState(true);

  const next = () => {
    const pagenumper = ProdcutsSlice.nextPageNumber;
    dispatch(getProdcutsData(pagenumper));

    ProdcutsSlice.palodString.includes("next")
      ? setnextptn(true)
      : setnextptn(false);
  };
  const previous = () => {
    const pagenumper = ProdcutsSlice.previousPageNumber;
    dispatch(getProdcutsData(pagenumper));

    ProdcutsSlice.palodString.includes("prev")
      ? setpreviousptn(true)
      : setpreviousptn(false);
  };
  return (
    <>
      <div className={styles.agenation}>
        <div className={styles.agenationContent}>
          {previousptn && <li onClick={() => previous()}>&#8249;0</li>}

          {nextptn && <li onClick={() => next()}>&#8250; 1</li>}
        </div>
      </div>
    </>
  );
};
export default MyPagenation;
