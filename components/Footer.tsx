const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "black",
        padding: "5px",
        height: "50px",
        width: "100%",
      }}
    >
      <span style={{ color: "orange" }}>Made with NextJS MySQL</span>
    </div>
  );
};

export default Footer;
