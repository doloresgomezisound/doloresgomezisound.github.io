"use client";

import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const DOLORES_EMAIL = "dologomezisound@gmail.com";

export default function ContactTab() {
  const { translations } = useLanguage();
  const [formData, setFormData] = useState({
    //name: "",
    //email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { subject, message } = formData;
    const formattedSubject = encodeURIComponent(subject);
    //const formattedMessage = encodeURIComponent(
    //`Mensaje de: ${name}\n\n\n${message}`
    //)
    const formattedMessage = encodeURIComponent(message);
    const mailtoLink = `mailto:${DOLORES_EMAIL}?subject=${formattedSubject}&body=${formattedMessage}`;
    window.location.href = mailtoLink;
    setFormData({
      name: "",
      //email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-700 mb-6">{translations.getInTouch}</h3>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700 mb-4">{translations.contactText}</p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{translations.basedIn}</span>
              <a
                href="https://www.linkedin.com/in/dolores-gomez-iwachiw-1b7427200/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/linkedin.png"}
                  alt="Argentina"
                  className="w-8 h-8 ml-4"
                  style={{ maxWidth: "90%" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            {translations.contactMe}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {translations.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div> */}

            {/* <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {translations.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div> */}

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                {translations.subject}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {translations.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              {translations.sendMessage}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
