import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemInCart } from "../redux/accountSlice";

const ProductCard = (props: any) => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state: any) => state.account.itemsInCart);
  const index = productsInCart.findIndex((item) => item.id === props.id);

  const [itemCount, setItemCount] = useState(
    index === -1 ? 0 : productsInCart[index].quantity
  );

  const addItem = () => {
    console.log(`itemCount is ${itemCount}`);
    setItemCount((prev: any) => prev + 1);
    // dispatch(test());
    dispatch(
      addItemToCart({
        id: props.id,
        name: props.name,
        quantity: itemCount + 1,
      })
    );
  };

  const removeItem = () => {
    if (itemCount > 0) {
      setItemCount((prev: any) => prev - 1);
      dispatch(
        removeItemInCart({
          id: props.id,
          name: props.name,
          quantity: itemCount - 1,
        })
      );
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: "150px",
        borderRadius: "10px",
        backgroundColor: "black",
        color: "#f97316",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div>
          <span style={{ color: "white" }}>#{props.id}</span>
          <span>{props.name}</span>
        </div>
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
        />
      </div>
      <span>{itemCount}</span>
      <div>
        <button onClick={addItem}>+</button>
        {/* <button onClick={addItem}>Add</button> */}
        <button onClick={removeItem}>-</button>
      </div>
    </div>
  );
};

export default ProductCard;
