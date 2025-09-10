'use client'

import { Search, ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY })

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="bg-transparent overflow-hidden relative">
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-32 right-20 w-[200px] h-[200px] bg-[#F7DC6F] rounded-full opacity-40 animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -0.006}px, ${mousePosition.y * -0.006}px)`,
          }}
        />
        <div
          className="absolute bottom-40 right-32 w-[120px] h-[120px] bg-[#F4D03F] rounded-full opacity-50 animate-bounce-gentle"
          style={{
            transform: `translate(${mousePosition.x * 0.004}px, ${mousePosition.y * 0.004}px)`,
          }}
        />
      </div>

      <header className={`relative z-20 transition-all duration-700 ease-out ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl' : ''}`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Mobile: Hamburger menu */}
          <div className="flex lg:hidden items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center flex-1 justify-center lg:justify-start">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={120} height={120} />
            </Link>
          </div>

          {/* Mobile: Search Icon */}
          <div className="lg:hidden">
            <button className="p-2">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop: Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {['Home', 'Category', 'About', 'Contact'].map((item, index) => (
              <a
                key={item}
                href="#"
                className="text-[#1B365D] font-semibold text-lg hover:text-[#2E5A88] transition-all duration-300 relative group py-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2E5A88] to-[#F4D03F] group-hover:w-full transition-all duration-500" />
                <span className="absolute inset-0 w-full h-full bg-[#F4D03F] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg -z-10" />
              </a>
            ))}
          </nav>

          {/* Desktop: Right section */}
         <div className="hidden lg:flex items-center space-x-6">
 
          <div className="relative group mr-6"> 
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#667479] w-5 h-5 group-hover:text-[#2E5A88] transition-colors duration-300" />
            <Input
              placeholder="Search something here!"
              className="pl-12 pr-6 py-3 w-64 max-w-xs bg-white/90 backdrop-blur-sm border-none focus:border-[#2E5A88] focus:ring-2 focus:ring-[#2E5A88]/20 transition-all duration-300 hover:shadow-xl rounded-full font-medium text-gray-700 placeholder:text-gray-400"
            />
          </div>

        {/* Join Community */}
        <Button className="bg-[#1B365D] hover:bg-[#2E5A88] text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:shadow-[#1B365D]/30 relative overflow-hidden group">
          <span className="relative z-10">Join the community</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E5A88] via-[#F4D03F] to-[#2E5A88] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-flow" />
        </Button>

        {/* Language */}
        <div className="flex items-center space-x-2 cursor-pointer group">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse-gentle shadow-lg shadow-red-500/40" />
          <span className="text-[#1B365D] font-bold text-base group-hover:text-[#2E5A88] transition-colors duration-300">VND</span>
          <ChevronDown className="w-4 h-4 text-[#1B365D] group-hover:text-[#2E5A88] transition-all duration-300 group-hover:rotate-180" />
        </div>
      </div>

        </div>

        {/* Mobile: Drawer menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white w-full absolute top-full left-0 shadow-lg z-30 animate-slide-down">
            <div className="flex flex-col px-6 py-4 space-y-4">
              {['Home', 'Category', 'About', 'Contact'].map(item => (
                <a
                  key={item}
                  href="#"
                  className="text-[#1B365D] font-semibold text-lg hover:text-[#2E5A88] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
