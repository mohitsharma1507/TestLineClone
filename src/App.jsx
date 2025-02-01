import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Test } from "./components/Test";

const App = () => {
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "#ecf0f1 ", minHeight: "195vh" }}
      >
        <Navbar />
        <Hero />
        <Test />
        <Footer />
      </div>
    </>
  );
};

export default App;
