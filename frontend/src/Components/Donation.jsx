import React from 'react'
import { useNavigate } from 'react-router-dom';

import '../styles/Donation.css'
import qrImage from "../assets/qr.png"
import donationImage from "../assets/donation.png"


const Donation = () => {
  return (
    <div className="donation-page" style={{ backgroundImage: `url(${donationImage})` }}>
    <div className="donation-overlay" />

    <div className="donation-header">
      <h1>Support Rural Education</h1>
      <p>Your small donation can create big change in rural children’s lives.</p>
    </div>

    <div className="donation-box">
      {/* Left side - Form */}
      <div className="form-side">
        <form className="donation-form">
          <label>Name</label>
          <input type="text" placeholder="Your full name" required />

          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Amount (INR)</label>
          <input type="number" placeholder="500" required />

          <label>Payment Method</label>
          <select required>
            <option value="">Select</option>
            <option value="razorpay">Razorpay</option>
            <option value="upi">UPI</option>
            <option value="paypal">PayPal</option>
          </select>

          <button type="submit">Donate Now</button>
          <small>You will receive a receipt and thank you email after payment.</small>
        </form>
      </div>

      {/* Right side - QR Code */}
      <div className="qr-side">
        <h3>Or Scan & Pay</h3>
        <img src={qrImage} alt="Donate via QR" className="qr-image" />
        <p>UPI ID: <strong>donate@ngo</strong></p>
      </div>
    </div>
  </div>
  )
}

export default Donation