// import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./Hpages.scss"
// import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  // const {currentUser} = useContext(AuthContext)
  // console.log(currentUser);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
          Explore the best property deals across India. Whether you're looking for a 2BHK flat, a luxurious villa, or an affordable rental – we’ve got it all. Buying your dream home has never been easier!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>1+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>10</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>100+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg4.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;