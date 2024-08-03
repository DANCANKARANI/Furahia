import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../componets/navbar";

export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 p-6 lg:p-12">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <form
              action="/api/contact" // Adjust the action based on your backend setup
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                 
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>

              <div className="flex items-center space-x-4 mt-4">
                <button
                  type="reset"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
                
                {/* WhatsApp Icon */}
                <a
                  href="https://wa.me/0797408042" // Replace with your WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 text-2xl flex items-center"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                  <span className="ml-2">Chat with us</span>
                </a>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-lg font-medium">Address</h3>
                <p className="text-gray-600">43844-00100 Kenyatta University, Nairobi, Kenya</p>
              </li>
              <li>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-gray-600">+ (254) 797408042</p>
              </li>
              <li>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-gray-600">furahia.adventures@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
