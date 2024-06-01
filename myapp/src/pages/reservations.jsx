
import BookingForm from "../components/bookingform";

function Reservations({availableTimes, dispatch}) {
	return (
		<>
			<BookingForm availableTimes={availableTimes} dispatch={dispatch} />
		</>
	);
}

export default Reservations;
