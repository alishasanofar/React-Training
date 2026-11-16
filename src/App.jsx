
import Navbar from "./Components/Navbar";
import Studentcard from "./Components/Studentcard";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="dashboard" id="home">

      <Navbar />

      <h1>Welcome to My Page!</h1>

      <div className="card-container" id="profile">

        <Studentcard
          name="Alisha"
          department="IT"
          year="2028"
        />

        <Studentcard
          name="Azeem"
          department="AIDS"
          year="2027"
        />

        <Studentcard
          name="Khathija"
          department="EEE"
          year="2028"
        />

      </div>
      <div>
        <Footer />
      </div>

    </div>

  );
}

export default App;
