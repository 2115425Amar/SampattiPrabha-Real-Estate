// import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./Hpages.scss";
// import { AuthContext } from "../../context/AuthContext";
import "../listPage/ListPage.scss";
// import { listData } from '../../lib/Dummydata';
// import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
// import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense, useState } from "react";

function HomePage() {
  // const {currentUser} = useContext(AuthContext)
  // console.log(currentUser);
  const data = useLoaderData();
  //pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; //number of cards per page

  return (
    <div>
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">
              Where Dreams Meet Reality – Real Estate for You
            </h1>
            <p>
              Explore the best property deals across India. Whether you're
              looking for a 2BHK flat, a luxurious villa, or an affordable
              rental – we’ve got it all. Buying your dream home has never been
              easier!
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
          {/* <img src="/bg4.png" alt="" /> */}
          <img src="/sp4.jpeg" alt="" />
        </div>
      </div>
      {/* <ListPage/> */}
      <hr />
      <br />

      <div className="listPage">
        <div className="listContainer">
          <div className="wrapper">
            {/* <Filter /> */}
            <br />
            <br />
            <br />
            <br />
            <hr />
            <Suspense fallback={<p>Loading...</p>}>
              <Await
                resolve={data.postResponse}
                errorElement={<p>Error while loading posts!</p>}
              >
                {(postResponse) => {
                  const allPosts = postResponse.data;
                  // Calculate posts for current page
                  const indexOfLastPost = currentPage * postsPerPage;
                  const indexOfFirstPost = indexOfLastPost - postsPerPage;
                  const currentPosts = allPosts.slice(indexOfFirstPost,indexOfLastPost);
                  const totalPages = Math.ceil(allPosts.length / postsPerPage);
                  return (
                    <>
                      {currentPosts.map((post) => (
                        <Card key={post.id} item={post} />
                      ))}

                      {/* Pagination Controls */}
                      <div className="pagination">
                        {Array.from({ length: totalPages }, (_, i) => (
                          <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            className={currentPage === i + 1 ? "active" : ""}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>
                    </>
                  );
                }}
              </Await>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
