import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p className="text-sm mb-1">43844 Kenyatta University, Nairobi, Kenya</p>
            <p className="text-sm mb-1">+ (254) 797408042</p>
            <p className="text-sm mb-1">furahia.adventures@gmail.com</p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/explore" className="hover:underline">Explore</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Furahia Adventures. All rights reserved. Developed by pentabyte inc</p>
        </div>
      </div>
    </footer>
  );
}
