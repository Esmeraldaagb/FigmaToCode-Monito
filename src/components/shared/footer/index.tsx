import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
function Footer() {
  return (
    <Card className="flex items-end justify-center bg-[#FCEED5] py-6 rounded-t-xl px-20">
      <footer className="w-full">
        {/* Newsletter */}
        <div className="flex justify-center mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4  w-full bg-[#003459] text-white p-6 rounded-lg shadow-lg mx-8 ">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg">
                Register Now So You {"Don't"} Miss
              </h3>
              <p className="text-lg font-bold">Our Programs</p>
            </div>

            <div className="relative w-full max-w-5xl bg-white p-3 rounded-md flex items-center border-2 border-gray-300 overflow-hidden">
            <Input
                type="email"
                placeholder="Enter your Email"
                className="flex-1 px-4 py-3 text-gray-800 text-lg focus:outline-none border-2 rounded-md"
            />
            <button className="bg-[#003459] text-white px-4 py-1 hover:bg-[#FCEED5] ml-2 transition-colors text-sm sm:text-base rounded-lg">
                Subscribe Now
            </button>
            </div>


          </div>
        </div>

        {/* Navigation and Social Section */}
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <nav className="flex gap-8">
              <a href="#" className="text-[#00171F] hover:text-[#003459] transition-colors">Home</a>
              <a href="#" className="text-[#00171F] hover:text-[#003459] transition-colors">Category</a>
              <a href="#" className="text-[#00171F] hover:text-[#003459] transition-colors">About</a>
              <a href="#" className="text-[#00171F] hover:text-[#003459] transition-colors">Contact</a>
            </nav>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-[#00171F] hover:text-[#003459] cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-[#00171F] hover:text-[#003459] cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-[#00171F] hover:text-[#003459] cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-[#00171F] hover:text-[#003459] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="px-8 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-sm">© 2022 Monito. All rights reserved.</p>
            <div className="text-blue-800 font-bold text-lg">
              <Image src="/logo.png" alt="logo" width={120} height={120} />
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 text-sm hover:text-gray-800 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-800 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </Card>
  );
}

export default Footer;
