import type { NextPage } from "next";
import { useSelector } from "react-redux";

import ProjectCard from "../components/ProjectCard";
const Home: NextPage = () => {
  const products = useSelector((state: any) => state.store.products);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
          margin: "5px",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {products.map((item: any) => {
          return (
            <ProjectCard
              id={item.id}
              name={item.name}
              quantity={item.quantity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
