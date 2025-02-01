import TestLineLogo from "../assets/TestLineLogo.png";

export const Navbar = () => {
  return (
    <div
      className="container"
      style={{
        maxWidth: "105rem",
        backgroundColor: "white",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      <div className="logo" style={{ marginTop: "1rem" }}>
        <img src={TestLineLogo} alt="TestLine" style={{ width: "16rem" }} />
      </div>
    </div>
  );
};
