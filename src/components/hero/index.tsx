'use client'

import { Play,  } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import Image from 'next/image'


export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#Fceed5] overflow-hidden relative rounded-b-xl">
 
      <main className=" mx-auto px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-140px)]">
          {/* Contenu gauche */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h1 className="text-[#002A48] text-4xl xl:text-6xl font-bold">
              <span className="inline-block animate-slide-up-stagger-1 transition-colors duration-500">
                    <span className="relative z-10 inline-flex items-center justify-center w-17 h-17 bg-[#F7DBA7] rotate-12 text-[#002A48] font-bold rounded-sm -mr-4">
                      O
                    </span>
                    <span className="relative z-12 ml-1">ne More Friend</span>
                  </span>

                <br />
                <span className="inline-block animate-slide-up-stagger-2 mt-3 text-[#002A48] animate-gradient-text">
                  Thousands More Fun!
                </span>
              </h1>
              
              <p className="text-[#242B33] text-xl leading-relaxed max-w-xl opacity-80 animate-fade-in-stagger font-medium">
                Having a pet means you have more joy, a new friend, a happy 
                person who will always be with you to have fun. We have 200+ 
                different pets that can meet your needs!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 animate-slide-up-stagger-3">
              <Button 
                variant="outline" 
                className=" border-[#1B365D] bg-transparent text-[#1B365D] hover:bg-[#1B365D] hover:text-white p-4 rounded-full font-semibold text-md transition-all duration-500 hover:scale-105 group hover:shadow-2xl hover:shadow-[#1B365D]/25 transform relative overflow-hidden"
              >
                <span className="relative z-10">View Intro</span>
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                
              
              </Button>
              
              <Button 
                className="bg-[#1B365D] hover:bg-[#2E5A88] text-white p-4 rounded-full font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:shadow-[#1B365D]/30 relative overflow-hidden group"
              >
                <span className="relative z-10">Explore Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2E5A88] via-[#F4D03F] to-[#2E5A88] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-flow" />
              </Button>
            </div>
          </div>

          {/* Contenu droit */}
          <div className="relative animate-slide-in-right">
            <div 
              className="absolute top-16 left-8 w-8 h-8 bg-[#1B365D] transform rotate-45 animate-spin-slow z-20"
              style={{
                transform: `rotate(45deg) translate(${mousePosition.x * 0.003}px, ${mousePosition.y * 0.003}px)`,
              }}
            />
            
      
            <div className="relative z-40 ml-16 mt-8 animate-zoom-in-stagger">
           
                {/*image  */}
                <Image
                  src="/heroimage.png"
                  alt="Happy woman with Corgi dog"
                  className="w-[500px] h-[600px] object-cover object-center transition-all duration-700 hover:scale-110"
                  width={400}
                  height={500}
                />
                
              </div>
            </div>
        
        </div>
      </main>
    </div>
  )
}