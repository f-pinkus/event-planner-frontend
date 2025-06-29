export function EventsIndex({ events , onShow }) {
  return (
    <div>
      <h1>({events.length}) Events</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <h5>{event.location}</h5>
          <h5>{event.date}</h5>
          <button onClick={() => onShow(event)}>Attendees</button>
        </div>
      ))}
    </div>
  );
}