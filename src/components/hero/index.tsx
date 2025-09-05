import React from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';

function Hero() {
  return (
    <div className="bg-[#FCEED5]">
      <div className="container mx-auto px-0 py-0">
        <div className="max-w-full min-h-[400px] rounded-3xl overflow-hidden flex items-stretch relative">
          {/* Colonne gauche */}
          <div className="flex flex-col justify-center pl-16 pr-8 py-12 flex-1 z-20">
            <h1 className="text-[#002A48] text-4xl xl:text-6xl font-bold mb-2">
              <span className="inline-block align-middle">
                <span className="relative z-10 inline-flex items-center justify-center w-12 h-12 bg-[#F7DBA7] rotate-12 text-[#002A48] font-bold rounded-sm -mr-2">
                  O
                </span>
                <span className="relative z-12 ml-1">ne More Friend</span>
              </span>
            </h1>
            <h2 className="text-[#002A48] text-2xl xl:text-4xl font-bold mb-4">
              Thousands More Fun!
            </h2>
            <p className="text-[#242B33] text-base xl:text-lg max-w-md opacity-80 font-medium mb-8">
              Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
            </p>
            <div className="flex flex-row gap-4">
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
          {/* Colonne droite */}
        <div className="flex-1 relative flex items-end justify-end min-h-[400px]">
  {/* Card bleue */}
  <div
    className="absolute left-8 bottom-0 w-full max-w-[400px] h-[370px] bg-[#003459] rounded-bl-[80px] rounded-[45px] z-10"
    style={{ transform: "skewX(-16deg)" }}
  ></div>
  {/* Card jaune */}
  <div
    className="absolute right-[40px] bottom-0 w-full max-w-[520px] h-[420px] bg-[#F7DBA7] rounded-br-[80px] rounded-[45px] z-20"
    style={{ transform: "rotate(-7deg)" }}
  ></div>
  {/* Image principale */}
  <div className="relative -bottom-4 z-30 flex items-end justify-end h-full">
    <Image
      src="/hero.png"
      alt="Happy person holding a dog"
      width={400}
      height={400}
      className="object-contain h-[500px] w-auto "
      priority
    />
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;