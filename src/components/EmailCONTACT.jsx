import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const EmailCONTACT = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vek7lnt', 'template_m2c79m9', form.current,'AujDt9pgRMI9RyBH5')
      .then(
        () => {
          alert('Email sent successfully!');
          form.current.reset(); // Clear all fields
        },
        (error) => {
          alert('Failed to send email, please try again.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="border border-[#7456FF] p-6 rounded-lg shadow-lg w-full w-[100%] mx-auto hover:scale-105 transition-transform duration-300">
      <h2 className="text-2xl font-bold text-white mb-4">Have any project in mind ? <span className='text-[#7456FF]'>CONTACT ME</span></h2>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-semibold mb-2">Name</label>
        <input
          type="text"
          name="user_name"
          className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-semibold mb-2">Email</label>
        <input
          type="email"
          name="user_email"
          className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-semibold mb-2">Message</label>
        <textarea
          name="message"
          className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="4"
          required
        />
      </div>
      <div className="text-center">
        <input
          type="submit"
          value="Send Email"
          className="px-6 py-2 bg-[#7456FF] text-white font-semibold rounded-lg hover:bg-white hover:text-[#7456FF] focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </form>
  );
};
