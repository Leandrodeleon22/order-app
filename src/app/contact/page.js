import React from "react";

export default function Contact() {
  return (
    <div className="flex justify-between mx-4">
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold">Contact Information:</h2>
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.7461286638427!2d-114.0993724585357!3d51.03930944490807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fd853c4bdd5%3A0xfd2962f14ddacfc7!2s1533%2015%20Ave%20SW%2C%20Calgary%2C%20AB%20T3C%200Y1!5e0!3m2!1sen!2sca!4v1714694012344!5m2!1sen!2sca"
          width="90%"
          height="150%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <br />
        <p>1234 Restaurant Address</p>
        <p>+1 234 567 890</p>
        <p>email@example.com</p>
      </div>
      <div className="w-1/2 p-4">
        <form className="flex flex-col" style={{ width: "100%" }}>
          <h2 className="text-2xl font-bold mb-4">Contact us:</h2>
          <br />
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="6" required></textarea>
          <button type="submit" className="mx-auto bg-orange-500 text-white py-2 px-2 rounded hover:bg-orange-600 transition duration-300 mt-4 font-bold">Send us</button>
        </form>
      </div>
    </div>
  );
}