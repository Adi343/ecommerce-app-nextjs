import Image from "next/image";
import githubIcon from "../public/GitHub-Mark-64px.png";
const about = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100vh",
      }}
    >
      <span
        style={{ fontWeight: "bold", fontSize: "1.25rem", textAlign: "center" }}
      >
        Your order has been saved to a database!
      </span>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "250px",
          height: "50px",
        }}
      >
        <span>Check out code at</span>
        <a
          href={"https://github.com/Adi343/ecommerce-app-nextjs"}
          target="_blank"
          style={{
            paddingTop: "5px",
            marginLeft: "5px",
          }}
        >
          <Image
            width={20}
            height={20}
            src={githubIcon}
            style={{
              display: "inline-block",
              verticalAlign: "bottom",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default about;
