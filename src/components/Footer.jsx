import React from "react";
import Container from "./Container";
import footer_logo from "../assets/logo_big.png";
import { Instagram, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { FaPinterestP, FaWhatsapp, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Company", path: "/about" },
    { name: "Products", path: "/" },
    { name: "Offices", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const categories = [
    { name: "Men's Fashion", path: "/men" },
    { name: "Women's Fashion", path: "/women" },
    { name: "Kids Collection", path: "/kids" },
    { name: "New Arrivals", path: "/" },
    { name: "Sale Items", path: "/" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
    { icon: FaFacebookF, href: "#", label: "Facebook", color: "hover:text-blue-500" },
    { icon: FaTwitter, href: "#", label: "Twitter", color: "hover:text-sky-500" },
    { icon: FaPinterestP, href: "#", label: "Pinterest", color: "hover:text-red-500" },
    { icon: FaWhatsapp, href: "#", label: "WhatsApp", color: "hover:text-green-500" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi0yIDYgMi0yIDYtMiA2LTYtMi02IDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] repeat"></div>
      </div>

      <Container>
        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 md:py-16">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src={footer_logo} 
                  alt="BISWAS Logo" 
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  BISWAS
                </h2>
              </div>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm">
                Your premium fashion destination. Discover the latest trends and timeless classics for the whole family.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>info@biswas.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span>123 Fashion Street, NY</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 group"
                    >
                      <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-white transition-colors" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link 
                      to={category.path}
                      className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 group"
                    >
                      <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-white transition-colors" />
                      <span>{category.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                Stay Connected
              </h3>
              
              <p className="text-gray-300 text-sm">
                Subscribe to our newsletter for latest updates and exclusive offers.
              </p>
              
              {/* Mini Newsletter */}
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm font-medium">
                  Subscribe
                </button>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-2 bg-gray-800 rounded-lg text-gray-400 ${social.color} hover:bg-gray-700 transform hover:scale-110 transition-all duration-200 hover:shadow-lg`}
                        aria-label={social.label}
                      >
                        <IconComponent className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6 pb-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-400 text-center md:text-left">
                <p>&copy; 2025 BISWAS. All rights reserved.</p>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
