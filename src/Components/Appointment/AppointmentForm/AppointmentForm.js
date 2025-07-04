import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
  
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        onSubmit({
          name,
          phoneNumber,
          date: selectedDate,
          timeslot: selectedSlot,
          doctorName,
          doctorSpeciality
        });
    
        // Reset the form
        setName('');
        setPhoneNumber('');
        setSelectedDate('');
        setSelectedSlot('');
      };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="timeslot">Select Time Slot:</label>
        <select
          id="timeslot"
          value={selectedSlot}
          onChange={(e) => setSelectedSlot(e.target.value)}
          required
        >
          <option value="">-- Choose a Time Slot --</option>
          <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
          <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
          <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
          <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
        </select>
      </div>

        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm
