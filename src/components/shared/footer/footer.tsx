"use client";

import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

function Footer() {
  return (
    <Card className="bg-[#FCEED5] rounded-t-xl w-full py-6 px-4 sm:px-8 lg:px-20">
      <footer className="w-full flex flex-col space-y-8">

        {/* Newsletter */}
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full bg-[#003459] text-white p-6 rounded-lg shadow-lg">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg">
                Register Now So You {"Don't"} Miss
              </h3>
              <p className="text-lg font-bold">Our Programs</p>
            </div>

            <div className="relative w-full max-w-6xl bg-white p-3 rounded-md flex items-center border-2 border-gray-300 overflow-hidden">
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

     
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-center">
            {["Home", "Category", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#00171F] hover:text-[#003459] transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex justify-center md:justify-end gap-4">
            <Facebook className="w-5 h-5 text-[#00171F] hover:text-[#003459] cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-[#00171F] hover:text-[#003459] cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-[#00171F] hover:text-[#003459] cursor-pointer transition-colors" />
            <Youtube className="w-5 h-5 text-[#00171F] hover:text-[#003459] cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 w-full" />

        {/* Copyright & Logo & Policies */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">

          <div className="order-1 md:order-1 flex justify-center md:justify-start w-full md:w-auto">
            <p className="text-gray-600 text-sm">© 2022 Monito. All rights reserved.</p>
          </div>

          <div className="order-2 md:order-2 flex justify-center w-full md:w-auto">
            <Image src="/logo.png" alt="logo" width={120} height={120} />
          </div>

          <div className="order-3 md:order-3 flex flex-col md:flex-row items-center gap-2 w-full md:w-auto justify-center md:justify-end">
            <a href="#" className="text-gray-600 text-sm hover:text-gray-800 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-800 transition-colors">
              Privacy Policy
            </a>
          </div>

        </div>
      </footer>
    </Card>
  );
}

export default Footer;
