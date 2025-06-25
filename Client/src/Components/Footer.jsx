import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/Logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <div className="flex gap-4 mb-4 items-center">
              
                <img
                  src={logo}
                  className="w-12 h-12 bg-white rounded-full"
                  alt=""
                />
              
              <h2 className="text-2xl font-bold">PlantPal</h2>
            </div>
            <p className="text-gray-400">
              Empowering connections through innovative solutions. Explore our
              world of technology and creativity.
            </p>
          </div>

 
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: contact@plantpal.com</p>
            <p className="text-gray-400">Phone: (+888) 01456-78****</p>
            <p className="text-gray-400">
              Address: 123 MMC St, Tech City, TC 12345
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                to="https://twitter.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                to="https://facebook.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} PlantPal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
