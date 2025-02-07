import { useState } from "react";
import { motion } from "framer-motion";
import "./BookingSection.css";
import sticker from "./images/book-sticker.png"


const BookingSection = () => {
    const [form, setForm] = useState({ name: "", email: "", service: "", date: "", time: "", details: "" });

    const services = ["Web Development", "SEO Optimization", "UI/UX Design", "Consultation"];

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking Details:", form);
        alert("Your booking request has been submitted!");
    };

    return (
        <motion.div className="booking-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="booking-headings">
                <h2 className="heading">Let's discuss your project! </h2>
                <h1 className="sub-heading">Fill in the details, and we'll connect soon. </h1>
            </div>
            <div className="book-service">
                <img className="sticker" src={sticker} alt="sticker"></img>
                <div className="card">
                    <form onSubmit={handleSubmit} className="form" id="booking-form">
                        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} className="input" />
                        <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} className="input" />

                        <select name="service" required onChange={handleChange} className="input">
                            <option value="">Select a Service</option>
                            {services.map((service, index) => (
                                <option key={index} value={service}>{service}</option>
                            ))}
                        </select>

                        <input type="date" name="date" required onChange={handleChange} className="input" />
                        <input type="time" name="time" required onChange={handleChange} className="input" />

                        <textarea name="details" placeholder="Tell us more about your appointment" required onChange={handleChange} className="input textarea"></textarea>

                        <button type="submit" className="book-button">Schedule Meeting</button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default BookingSection;