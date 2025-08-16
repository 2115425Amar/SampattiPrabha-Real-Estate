import { Suspense, useEffect, useState } from "react";
// import Filter from "../../components/filter/Filter";
import { Await, useLoaderData, useSearchParams } from "react-router-dom";
import "../Agents/Agents.scss";
import AgentCard from "../../components/AgentCard/AgentCard";
import Chat from "../../components/chat/Chat";
// import { Link } from "react-router-dom";

const Agents = () => {
  const data = useLoaderData();
  const [searchParams] = useSearchParams();
  const autoOpenUserId = searchParams.get("chat");

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Suspense fallback={<p>Loading admin users...</p>}>
            <Await
              resolve={data.agentsResponse}
              errorElement={<p>Error loading agents!</p>}
            >
              {(agents) => (
                <>
                  {agents.data.map((agent) => (
                    <AgentCard key={agent.id} item={agent} />
                  ))}
                </>
              )}
            </Await>
          </Suspense>
        </div>
      </div>

      <div className="imgContainer">
        <div className="chatContainer">
          <div className="wrapper">
            <Suspense fallback={<p>Loading chats...</p>}>
              <Await
                resolve={data.chatResponse}
                errorElement={<p>Error loading chats!</p>}
              >
                {(chatResponse) =>
                  chatResponse ? (
                    <Chat
                      chats={chatResponse?.data || []}
                      autoOpenUserId={autoOpenUserId}
                    />
                  ) : (
                    <p>No chats available.</p>
                  )
                }
              </Await>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Agents;
