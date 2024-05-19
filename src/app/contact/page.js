"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../../components/Footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_hizq2mc";
    const templateId = "template_obvqisx";
    const publicKey = "A2etVtVHjvnfOMjaj";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Andrew Stefankiv",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <>
      <div className="flex justify-between mx-4">
        <div className="w-1/2 p-4 flex flex-col min-h-screen">
          {" "}
          {/* Added flex flex-col min-h-screen */}
          <h2 className="text-2xl font-bold">Contact Information:</h2>
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.7461286638427!2d-114.0993724585357!3d51.03930944490807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fd853c4bdd5%3A0xfd2962f14ddacfc7!2s1533%2015%20Ave%20SW%2C%20Calgary%2C%20AB%20T3C%200Y1!5e0!3m2!1sen!2sca!4v1714694012344!5m2!1sen!2sca"
            width="90%"
            height="65%"
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
          <form
            className="Contact flex flex-col"
            style={{ width: "100%" }}
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold mb-4">Contact us:</h2>
            <br />
            <label htmlFor="name" className="mb-2">
              Name:
            </label>
            <input
              className="p-2 rounded-md mb-2"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email" className="mb-2">
              Email:
            </label>
            <input
              className="p-2 rounded-md mb-2"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message" className="mb-2">
              Message:
            </label>
            <textarea
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-md"
            ></textarea>
            <button
              type="submit"
              className="mx-auto bg-orange-500 text-white py-2 px-2 rounded hover:bg-orange-600 transition duration-300 mt-4 font-bold"
            >
              Send us
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
