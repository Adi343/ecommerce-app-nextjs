import { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemInCart } from "../redux/accountSlice";

import { Apple } from "iconoir-react";
import { CoffeeCup } from "iconoir-react";
import { PizzaSlice } from "iconoir-react";
import { BreadSlice } from "iconoir-react";
import { Chocolate } from "iconoir-react";

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
        price: props.price,
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
        margin: "3px",
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "90px",
              height: "90px",
              borderRadius: "10px",
              backgroundColor: "white",
            }}
          >
            {props.name === "Apple" ? (
              <Apple width={80} height={80} color={"#000000"} />
            ) : null}
            {props.name === "Coffee" ? (
              <CoffeeCup width={60} height={60} color={"#000000"} />
            ) : null}
            {props.name === "Pizza" ? (
              <PizzaSlice width={60} height={60} color={"#000000"} />
            ) : null}
            {props.name === "Bread" ? (
              <BreadSlice width={60} height={60} color={"#000000"} />
            ) : null}
            {props.name === "Chocolate" ? (
              <Chocolate width={60} height={60} color={"#000000"} />
            ) : null}
          </div>
        </div>
      </div>
      {/* Price of item*/}
      <span>₹ {props.price}</span>

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
