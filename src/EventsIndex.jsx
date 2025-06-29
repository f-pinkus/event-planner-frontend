export function EventsIndex({ events , onShow }) {
  return (
    <div>
      <h1>({events.length}) Events</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <button onClick={() => onShow(event)}>More Info</button>
        </div>
      ))}
    </div>
  );
}