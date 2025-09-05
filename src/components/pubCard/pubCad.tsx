'use client';

import { Card } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import Image from 'next/image';
import pub from "@/assets/pub.png";

export default function PubCard() {
  return (
    <Card className="relative bg-[#003459] rounded-3xl overflow-hidden shadow-xl border-0 p-0 mx-20">
      <div className="grid lg:grid-cols-2 items-stretch min-h-[350px]">
        {/* Colonne gauche : image */}
        <div className="flex items-end justify-center bg-transparent relative">
          <Image
            src={pub}
            alt="Woman holding French Bulldog"
            width={400}
            height={350}
            className="object-contain h-[350px] w-auto"
            priority
          />
        </div>

        {/* Colonne droite : contenu centré, pas de rotation */}
        <div className="bg-[#FCEED5] flex flex-col justify-center items-start px-10 py-12 rounded-l-[65px] h-full">
          <h1 className="text-[#003459] text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
            <span className="block">One More Friend</span>
          </h1>
          <h2 className="text-[#003459] text-2xl lg:text-3xl font-semibold mb-6">
            Thousands More Fun!
          </h2>
          <p className="text-[#242B33] text-base lg:text-lg mb-8 leading-relaxed font-medium">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#003459] text-[#003459] hover:bg-[#003459] hover:text-white transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-full flex items-center justify-center"
            >
              View Intro
              <Play className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              className="bg-[#003459] text-white hover:bg-[#002A48] px-8 py-3 text-lg font-semibold rounded-full"
            >
              Explore Now
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
