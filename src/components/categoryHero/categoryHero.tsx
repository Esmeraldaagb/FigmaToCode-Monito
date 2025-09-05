'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import Image from 'next/image';
import pub from "@/assets/pub.png";
import r1 from "@/assets/r1.png"; 
import r2 from "@/assets/r2.png"

export default function CategoryHero() {
  return (
    <Card className="relative mx-4 lg:mx-20 bg-[#003459] text-white rounded-3xl overflow-hidden shadow-xl">
      {/* Image*/}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 z-0">
        <Image
          src={r2}
          alt="Rectangle top right"
          className="object-contain w-full h-full opacity-80"
          priority
        />
      </div>

   
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 z-0">
        <Image
          src={r1}
          alt="Rectangle bottom left"
          className="object-contain w-full h-full opacity-80"
          priority
        />
      </div>

      <CardContent className="p-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
         
          <div className="flex justify-center relative z-30">
            <Image
              src={pub}
              alt="Woman holding French Bulldog"
              width={300}
              height={350}
              className="rounded-2xl object-cover w-full h-[300px] lg:h-[350px] transform hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

         
          <div className="relative z-30">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
              <span className="block">One More</span>
              <span className="block">Friend</span>
            </h1>

            <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-6">
              Thousands More Fun!
            </h2>

            <p className="text-base lg:text-lg mb-8 leading-relaxed">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different pets
              that can meet your needs!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-full"
              >
                <Play className="w-5 h-5 mr-2" />
                View Intro
              </Button>
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-3 text-lg font-semibold rounded-full"
              >
                Explore Now
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}