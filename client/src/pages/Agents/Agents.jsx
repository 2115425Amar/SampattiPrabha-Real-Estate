import { Suspense, useEffect, useState } from 'react'
import Filter from '../../components/filter/Filter'
import { Await, useLoaderData } from 'react-router-dom'
import "../Agents/Agents.scss";
import Card from '../../components/card/Card'
import { agentPageLoader } from '../../lib/loaders'

const Agents = () => {

    const agentsPromise = useLoaderData();
    console.log(agentsPromise);
    const data = useLoaderData();

  return (
    // <div>Agents</div>
    <>
     <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          {/* <Filter/> */}

          <Suspense fallback={<p>Loading admin users...</p>}>
            <Await 
              resolve={agentsPromise} 
              errorElement={<p>Error loading agents!</p>}
            >
              {(agents) => (
                <>
                  {agents.data.map(agent => (
                    <div key={agent.id} className="agentCard">
                      <img 
                        src={agent.avatar || '/noavatar.jpg'} alt={"Agent"} 
                        style={{ width: 100, height: 100, borderRadius: '50%' }}
                      />
                      <div>
                        <h3>{agent.username}</h3>
                        <p>{agent.email}</p>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Await>
          </Suspense>
           {/* <Suspense fallback={<p>Loading...</p>}>
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
          </Suspense> */}
        </div>
      </div>
      
      <div className="mapContainer">
        {/* <Map items={data}/> */}
        {/* <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts!</p>}
          >
          {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense> */}
      </div>
    </div>
    </>

  )
}

export default Agents