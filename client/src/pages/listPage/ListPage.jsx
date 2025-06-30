import React from 'react'
import "./ListPage.scss";
// import { listData } from '../../lib/Dummydata';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';
import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from "react";

function ListPage() {
  // const data = listData;
  const data = useLoaderData();

  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          {/* {data.map(item=>(
            <Card key={item.id} item={item}/>
          ))} */}

          {/* React Suspense is a built-in React feature that lets you wait ("suspend") rendering part of your component tree until some async data or code is ready — like lazy-loaded components or data fetching. */}
          {/* Suspense – "Ruko zara... Sabar karo 😄" */}
          {/* Suspense React ka ek component hai jo loading screen dikhata hai jab tak koi cheez (jaise component ya data) load ho rahi ho. */}
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error while loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
      
      <div className="mapContainer">
        {/* <Map items={data}/> */}
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  )
}

export default ListPage

