import Studentcard from "../Components/Studentcard";
function Home() {
    return(
        <div className="home-page">
            <h2 className="welcome-title">Welcome to my page!</h2>
            <h1 className="home-heading">Login to the website to see about the Student Details</h1>
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
        </div>
    );
}
export default Home;