
import BookingForm from "../components/bookingform";

export function Reservations({availableTimes, dispatch}) {
	return (
		<>
			<BookingForm availableTimes={availableTimes} dispatch={dispatch} />
		</>
	);
}

export default Reservations;
