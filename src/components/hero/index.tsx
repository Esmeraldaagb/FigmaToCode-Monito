import React from 'react';
import { Play, Search, ChevronDown } from 'lucide-react';
import Image from 'next/image';

function App() {
  return (
    <div className=" bg-[#FCEED5]">
  
      {/* Hero Section */}
      <div className="container mx-auto px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Contenu gaauche */}
          <div className="space-y-8">
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
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group flex items-center gap-3 px-8 py-3 border-2 border-[#003459] text-[#003459] rounded-full hover:bg-[#003459] hover:text-white transition-all duration-300 font-medium">
                View Intro
                <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current" />
                </div>
              </button>
              
              <button className="group flex items-center gap-3 px-8 py-3 bg-[#003459] text-white rounded-full hover:bg-[#003459] transition-all duration-300 font-medium">
                Explore Now
              </button>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            {/* Background Card */}
            <div className="absolute top-8 right-8 w-96 h-[480px] bg-[#FFDBA7] rounded-3xl shadow-lg z-0"></div>
            
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0">
              {/* Main blue shape */}
              <div className="absolute top-32 right-16 w-72 h-80 bg-[#003459] transform rotate-12 rounded-tl-[80px] rounded-br-[80px] opacity-90 z-5"></div>
              
              {/* Small decorative elements */}
              <div className="absolute top-24 left-12 w-4 h-4 bg-blue-900 transform rotate-45 z-5"></div>
              <div className="absolute top-12 right-24 w-6 h-6 bg-yellow-400 rounded-full z-5"></div>
              <div className="absolute bottom-24 left-4 w-8 h-8 bg-yellow-300 rounded-full opacity-70 z-5"></div>
            </div>
            
            {/* Main Image */}
            <div className="relative z-10 ml-8">
              <div className="relative">
                <Image 
                  src="/hero.png"
                  alt="Happy woman holding a Shiba Inu dog" 
                  className="w-full h-[600px] object-cover object-center rounded-2xl"
                  width={400}
                  height={450}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;