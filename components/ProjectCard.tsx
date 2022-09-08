import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemInCart } from "../redux/accountSlice";

const ProjectCard = (props: any) => {
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(props.quantity);

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
        height: "100px",
        borderRadius: "5px",
        backgroundColor: "black",
        color: "#f97316",
      }}
    >
      {props.name}
      {props.id}
      <span>{itemCount}</span>
      <div>
        <button onClick={addItem}>+</button>
        {/* <button onClick={addItem}>Add</button> */}
        <button onClick={removeItem}>-</button>
      </div>
    </div>
  );
};

export default ProjectCard;
