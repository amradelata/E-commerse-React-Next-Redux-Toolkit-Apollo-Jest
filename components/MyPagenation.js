import { style } from "dom-helpers";
import { useDispatch, useSelector } from "react-redux";
import { getProdcutsData } from "../store/slices/products.slice";
import styles from "./MyPagenation.module.css";

const MyPagenation = () => {
  const dispatch = useDispatch();
  const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);
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
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>

          <li onClick={() => next()}>&#8250;</li>
        </div>
      </div>
    </>
  );
};
export default MyPagenation;
