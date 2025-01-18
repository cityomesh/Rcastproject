"use client";
import { useState } from "react";
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react";

const Contactpage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const errorText = await response.text();
        console.error("Server response:", errorText);
        alert(`Failed to send the message: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("An error occurred. Please check your backend server and network connection.");
    }
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row justify-center mt-32 gap-6">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>
            <div className="flex items-start space-x-4">
              <div className="text-blue-900">
                <MapPin size={40} weight="bold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Corporate Office :</h3>
                <p className="text-gray-600">City Online Media Pvt Ltd.</p>
                <p className="text-gray-600 text-sm">
                  709, 7th Floor, Aditya Trade Center, Ameerpet, Hyderabad, Telangana 500038
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-blue-900">
                <MapPin size={40} weight="bold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Distributor :</h3>
                <p className="text-gray-600">TECHSAI DIGITAL SOLUTION LLP.</p>
                <p className="text-gray-600 text-sm">
                 107, Hallmark, Vasant Oscar, L.B.S. Road, Mulund (West), Mumbai – 400 080.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-blue-900">
                <Phone size={40} weight="bold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Mobile :</h3>
                <p className="text-gray-600">+91 96760 15678</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-blue-900">
                <EnvelopeSimple size={40} weight="bold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Email :</h3>
                <p className="text-gray-600">ashish@techsai.com</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white shadow-md rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
                    First Name
                  </label>
                </div>
                <div className="w-full relative">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
                    Last Name
                  </label>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full relative">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
                    Phone Number
                  </label>
                </div>
                <div className="w-full relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
                    Email
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white font-bold py-2 rounded hover:bg-[#0a0f2c] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.492635979274!2d78.4464182!3d17.4364301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c518f1af29%3A0xc0f5f478e7d34d42!2sCity%20Online%20Services%20Limited!5e0!3m2!1sen!2sin!4v1698358298192!5m2!1sen!2sin"
          className="w-full h-96 mt-8 rounded"
          loading="lazy"
          frameBorder="0"
          allowFullScreen
          aria-hidden="false"
        ></iframe>
      </div>
    </div>
  );
};

export default Contactpage;
