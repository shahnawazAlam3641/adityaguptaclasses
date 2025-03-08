import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-500 mb-4">AGC</h3>
            <p className="text-gray-400">
              Empowering students with quality commerce education since 2010.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#courses" className="text-gray-400 hover:text-primary-500">
                  Courses
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-400 hover:text-primary-500">
                  Demo Classes
                </a>
              </li>
              <li>
                <a href="#faculty" className="text-gray-400 hover:text-primary-500">
                  Faculty
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500">
                  Study Materials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-gray-400">
                  123 Commerce Street, Kolkata - 700001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-500 mr-2" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-primary-500">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500 mr-2" />
                <a href="mailto:info@agc.com" className="text-gray-400 hover:text-primary-500">
                  info@agc.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 9 AM - 7 PM</li>
              <li>Saturday: 9 AM - 5 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AGC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}