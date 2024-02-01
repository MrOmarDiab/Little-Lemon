import React, { useState } from 'react';
import Swal from "sweetalert2";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
         e.preventDefault();
         Swal.fire({
             title: "Reserved!",
             text: "Your reservation is confirmed!",
             icon: "success"
            });
    }
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return(
        <div>
            <header>
                <section>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <div>
                                <label htmlFor='book-date'>Choose Date</label>
                                <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date'
                                 required/>
                            </div>
                            <div>
                                <label htmlFor='book-time'>Choose Time</label>
                                <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                                    <option value="">Select a Time</option>
                                    {
                                        props.availableTimes.availableTimes.map(availableTimes => {return <option
                                            key={availableTimes}>{availableTimes}</option>})
                                    }
                                </select>

                            </div>
                            <div>
                                <label htmlFor='book-guests'>Number of Guests:</label>
                                <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)} required/>
                            </div>
                            <div>
                                <label htmlFor='book-occasion'>Occasion</label>
                                <select id='book-occasion' key={occasion} value={occasion}onChange={e => setOccasion(e.target.value)}>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                </select>
                            </div>
                            <div className='btnReceive'>
                                <button aria-Label='On Click' type='submit' value={"Make Your Reservation"}>Make Your Reservation</button>
                            </div>

                        </fieldset>
                    </form>
                </section>
            </header>
        </div>
    );
};

export default BookingForm;