import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/Reservations.css';
import restaurantOutdoor from '../assets/restaurant.jpg';
import restaurantChef from '../assets/restaurant chef B.jpg';
import restaurantFood from '../assets/restauranfood.jpg';

const Reservations = () => {
  const [step, setStep] = useState('selection'); // 'selection', 'confirmation', or 'success'
  const [seating, setSeating] = useState('indoor');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDiners, setSelectedDiners] = useState('');
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');

  // Personal information state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);

  const [availableTimes] = useState([
    '17:00:00', '17:30:00', '18:00:00', '18:30:00', '19:00:00', '19:30:00',
    '20:00:00', '20:30:00', '21:00:00', '21:30:00', '22:00:00'
  ]);

  // Filter dates to only allow future dates
  const filterPastDates = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  // Calculate min and max dates
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 60);

  const validateForm = () => {
    if (!selectedDate) {
      setWarningMessage('Please select a date for your reservation');
      return false;
    }
    if (!selectedTime) {
      setWarningMessage('Please select a time for your reservation');
      return false;
    }
    if (!selectedDiners) {
      setWarningMessage('Please select the number of diners');
      return false;
    }
    if (!selectedOccasion) {
      setWarningMessage('Please select an occasion');
      return false;
    }
    return true;
  };

  const validatePersonalInfo = () => {
    if (!firstName.trim()) {
      setWarningMessage('Please enter your first name');
      return false;
    }
    if (!lastName.trim()) {
      setWarningMessage('Please enter your last name');
      return false;
    }
    if (!email.trim()) {
      setWarningMessage('Please enter your email');
      return false;
    }
    if (!phone.trim()) {
      setWarningMessage('Please enter your phone number');
      return false;
    }
    if (!agreedToPolicy) {
      setWarningMessage('Please agree to the privacy policy');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowWarning(false);
    
    if (!validateForm()) {
      setShowWarning(true);
      return;
    }

    // If validation passes, proceed to confirmation step
    setStep('confirmation');
  };

  const handleConfirmation = (e) => {
    e.preventDefault();
    setShowWarning(false);

    if (!validatePersonalInfo()) {
      setShowWarning(true);
      return;
    }

    // If validation passes, proceed with final submission
    console.log('Reservation confirmed:', {
      seating,
      selectedDate: selectedDate.toISOString().split('T')[0],
      selectedTime,
      selectedDiners,
      selectedOccasion,
      firstName,
      lastName,
      email,
      phone,
      specialRequests
    });
    
    // Show success state
    setStep('success');
  };

  if (step === 'success') {
    return (
      <div className="reservations">
        <div className="reservations-container">
          <div className="success-section">
            <div className="success-message">
              <i className="success-icon">✅</i>
              <h2>Reservation Confirmed!</h2>
              <p>Thank you for choosing Little Lemon, {firstName}!</p>
              <div className="reservation-details">
                <p>We've sent a confirmation email to: {email}</p>
                <div className="confirmation-summary">
                  <div className="summary-item">
                    <i className="icon calendar-icon">📅</i>
                    <span>Date: {selectedDate?.toLocaleDateString()}</span>
                  </div>
                  <div className="summary-item">
                    <i className="icon time-icon">⏰</i>
                    <span>Time: {selectedTime}</span>
                  </div>
                  <div className="summary-item">
                    <i className="icon person-icon">👥</i>
                    <span>Diners: {selectedDiners}</span>
                  </div>
                  <div className="summary-item">
                    <i className="icon seating-icon">🪑</i>
                    <span>Seating: {seating}</span>
                  </div>
                </div>
              </div>
              <button 
                className="new-reservation-button"
                onClick={() => {
                  // Reset all form fields
                  setStep('selection');
                  setSelectedDate(null);
                  setSelectedTime('');
                  setSelectedDiners('');
                  setSelectedOccasion('');
                  setFirstName('');
                  setLastName('');
                  setEmail('');
                  setPhone('');
                  setSpecialRequests('');
                  setAgreedToPolicy(false);
                  setShowWarning(false);
                  setWarningMessage('');
                }}
              >
                Make Another Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'confirmation') {
    return (
      <div className="reservations">
        <div className="reservations-container">
          <div className="reservations-form-section">
            <h1>Complete Reservation</h1>
            <form className="reservation-form" onSubmit={handleConfirmation} id="confirmation-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <div className="input-with-icon">
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <div className="input-with-icon">
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <div className="input-with-icon">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <div className="input-with-icon">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(123) 456-7890"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="reservation-summary">
                <div className="summary-item">
                  <i className="icon calendar-icon">📅</i>
                  <span>Date: {selectedDate?.toLocaleDateString()}</span>
                </div>
                <div className="summary-item">
                  <i className="icon time-icon">⏰</i>
                  <span>Time: {selectedTime}</span>
                </div>
                <div className="summary-item">
                  <i className="icon person-icon">👥</i>
                  <span>Diners: {selectedDiners}</span>
                </div>
                <div className="summary-item">
                  <i className="icon occasion-icon">🎉</i>
                  <span>Occasion: {selectedOccasion}</span>
                </div>
                <div className="summary-item">
                  <i className="icon seating-icon">🪑</i>
                  <span>Seating: {seating}</span>
                </div>
              </div>

              <div className="form-group special-requests">
                <label>Special Requests</label>
                <textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Add any special requests or notes"
                  rows={4}
                />
              </div>

              <div className="privacy-policy">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={agreedToPolicy}
                    onChange={(e) => setAgreedToPolicy(e.target.checked)}
                    required
                  />
                  <span>You agree to our friendly privacy policy *</span>
                </label>
              </div>

              {showWarning && (
                <div className="warning-message">
                  {warningMessage}
                </div>
              )}
            </form>
          </div>

          <div className="reservations-display-section">
            <div className="restaurant-images">
              <img src={restaurantOutdoor} alt="Restaurant outdoor seating" className="restaurant-image" />
              <img src={restaurantChef} alt="Restaurant chef" className="restaurant-image" />
              <img src={restaurantFood} alt="Restaurant food" className="restaurant-image" />
            </div>
            <button type="submit" form="confirmation-form" className="confirm-button">
              Confirm Reservation
            </button>
            {showWarning && (
              <div className="warning-message warning-message-light">
                {warningMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="reservations">
      <div className="reservations-container">
        <div className="reservations-form-section">
          <h1>Reservations</h1>
          
          <div className="seating-options">
            <div className="seating-option">
              <input 
                type="radio" 
                id="indoor" 
                name="seating" 
                value="indoor"
                checked={seating === 'indoor'}
                onChange={(e) => setSeating(e.target.value)}
              />
              <label htmlFor="indoor">Indoor seating</label>
            </div>
            
            <div className="seating-option">
              <input 
                type="radio" 
                id="outdoor" 
                name="seating" 
                value="outdoor"
                checked={seating === 'outdoor'}
                onChange={(e) => setSeating(e.target.value)}
              />
              <label htmlFor="outdoor">Outdoor seating</label>
            </div>
          </div>

          <form className="reservation-form" onSubmit={handleSubmit} id="reservation-form">
            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <div className="input-with-icon date-picker-container">
                  <i className="icon calendar-icon">📅</i>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    filterDate={filterPastDates}
                    minDate={minDate}
                    maxDate={maxDate}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Select Date"
                    required
                    className="date-picker-input"
                    showPopperArrow={false}
                    calendarClassName="reservation-calendar"
                    isClearable={false}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Number of Diners</label>
                <div className="input-with-icon">
                  <i className="icon person-icon">👥</i>
                  <select 
                    value={selectedDiners}
                    onChange={(e) => setSelectedDiners(e.target.value)}
                    required
                  >
                    <option value="">No. of Diners</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Occasion</label>
                <div className="input-with-icon">
                  <i className="icon occasion-icon">🎉</i>
                  <select 
                    value={selectedOccasion}
                    onChange={(e) => setSelectedOccasion(e.target.value)}
                    required
                  >
                    <option value="">Occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="date">Date Night</option>
                    <option value="business">Business Meal</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Time</label>
                <div className="input-with-icon">
                  <i className="icon time-icon">⏰</i>
                  <select 
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                  >
                    <option value="">Select Time</option>
                    {availableTimes.map(time => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {showWarning && (
              <div className="warning-message">
                {warningMessage}
              </div>
            )}
          </form>
        </div>

        <div className="reservations-display-section">
          <div className="restaurant-images">
            <img src={restaurantOutdoor} alt="Restaurant outdoor seating" className="restaurant-image" />
            <img src={restaurantChef} alt="Restaurant chef" className="restaurant-image" />
            <img src={restaurantFood} alt="Restaurant food" className="restaurant-image" />
          </div>
          <button type="submit" form="reservation-form" className="reserve-button">
            Reserve a Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservations; 