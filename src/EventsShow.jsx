export function EventsShow({ event }) {
  return (
    <div>
      <h1>Attendees</h1>
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