import { useSelector, useDispatch } from "react-redux";
import { remove_item_from_cart } from "../../store/slices/cart.slice";
import { addOne } from "../../store/slices/cart.slice";
import { removeOne } from "../../store/slices/cart.slice";

const cart = () => {
  const dispatch = useDispatch();
  const CartSlice = useSelector((state) => state.CartSlice);

  const remove = (item, index) => {
    // console.log(item, index);
    dispatch(remove_item_from_cart({ item, index }));
  };
  const addOnefunction = (item, index) => {
    dispatch(addOne({ item, index }));
  };
  const removeOnefunction = (item, index) => {
    dispatch(removeOne({ item, index }));
  };
  return (
    <div className="container">
      <p className="is-size-2">cart</p>
      <ul>
        {CartSlice.cart_products.map((item, index) => (
          <li key={item.id}>
            {item.name + " "}
            {item.quantity}
            {"  /  " + item.price + "$"}
            <button onClick={() => remove(item, index)}>delete</button>
            <button onClick={() => addOnefunction(item, index)}>+1</button>
            <button onClick={() => removeOnefunction(item, index)}>-1</button>
          </li>
        ))}
      </ul>
      {"TotalPrice:" + CartSlice.totalPrice}
    </div>
  );
};

export default cart;
