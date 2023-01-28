import { useState } from "react";
import { useRouter } from "next/router";
function EventLists({ eventLists }: any) {
  const [events, setEvents] = useState(eventLists);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    console.log("Fetching category events");
    const response = await fetch(
      "http://localhost:8080/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of Events</h1>
      {events.map((el: any) => {
        return (
          <div key={el.id}>
            <h2>
              {el.id}: {el.title} {el.date} | {el.category}
            </h2>
            <p>{el.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}
export default EventLists;

export async function getServerSideProps(context: any) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  console.log("Server Side Events fetch");
  const response = await fetch(`http://localhost:8080/events?${queryString}`);
  const data = await response.json();
  return {
    props: {
      eventLists: data,
    },
  };
}
