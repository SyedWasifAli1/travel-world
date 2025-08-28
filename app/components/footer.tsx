"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">TravelWorld</h2>
            <p className="mt-4 text-gray-200 text-sm">
              Discover amazing destinations and plan your perfect trip with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/destinations" className="hover:text-white">Destinations</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" className="hover:text-white">
                <Facebook />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-white">
                <Instagram />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-white">
                <Twitter />
              </Link>
              <Link href="https://youtube.com" target="_blank" className="hover:text-white">
                <Youtube />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-500 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
          <p>© {new Date().getFullYear()} TravelWorld. All rights reserved.</p>
          <p>Designed & Developed by <span className="font-semibold">Syed Wasif Ali</span></p>
        </div>
      </div>
    </footer>
  );
}
