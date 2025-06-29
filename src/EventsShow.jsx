export function EventsShow({ event }) {
  return (
    <div>
      <h1>Event Information</h1>
      <h3>{event.name}</h3>
      <h5>{event.date}</h5>
      <h5>{event.location}</h5>

      <h3>Attendees:</h3>
      <ul>
        {event.attendees.map((attendee) => (
          <li key={attendee.id}>
            {attendee.name} ({attendee.email})
          </li>
        ))}
      </ul>
    </div>
  )
}