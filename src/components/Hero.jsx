import "./Hero.css";

export const Hero = () => {
  return (
    <div
      className="container"
      style={{
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
        width: "64rem",
        height: "22rem",
        backgroundColor: "white",
        borderRadius: "2rem",
        marginLeft: "14rem",
        marginTop: "5rem",
        padding: "2rem",
      }}
    >
      <h3
        className="heading"
        style={{
          marginLeft: "20rem",
          color: "purple",
          textDecoration: "none",
          fontSize: "42px",
          fontWeight: "800",
          marginTop: "3rem",
        }}
      >
        Welcome to Testline
      </h3>
      <p className="para" style={{ textAlign: "center", fontSize: "19px" }}>
        Testline is redefining how students prepare for competitive exams like
        REET, NEET, and State PSCs. With daily <br></br> <br></br>
        test targets, smart revision, and gamified routines, we make learning
        interactive, interesting, and impactful. Join <br></br> <br></br>
        Testline to build habits, retain concepts, and <br></br>
        <br></br>
        <span style={{ color: "grey" }}>ace your confidence!</span>
      </p>
    </div>
  );
};
