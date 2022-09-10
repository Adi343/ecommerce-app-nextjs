import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemInCart } from "../redux/accountSlice";

const ProductCard = (props: any) => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state: any) => state.account.itemsInCart);
  const index = productsInCart.findIndex((item: any) => item.id === props.id);

  const [itemCount, setItemCount] = useState(
    index === -1 ? 0 : productsInCart[index].quantity
  );

  const addItem = () => {
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
        // flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "275px",
        height: "150px",
        borderRadius: "10px",
        backgroundColor: "black",
        color: "#f97316",
      }}
    >
      {/* Div for id , name and image */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ color: "white", margin: "10px" }}>#{props.id}</span>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",

            // width: "100%",
          }}
        >
          <span>{props.name}</span>
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "10px",
              backgroundColor: "white",
            }}
          />
        </div>
      </div>

      {/* Div for Counter and buttons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "1.25rem" }}>{itemCount}</span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "5px",
          }}
        >
          <button onClick={addItem}>+</button>
          {/* <button onClick={addItem}>Add</button> */}
          <button onClick={removeItem}>-</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
