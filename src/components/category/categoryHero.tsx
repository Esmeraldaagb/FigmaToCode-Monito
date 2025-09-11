'use client';

import { Card } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import Image from 'next/image';
import pub from "@/assets/catHero.png";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbList } from "@/components/ui/breadcrumb";
import Link from "next/link";
export default function CategoryHero() {
  return (
    <div className="mx-4 lg:mx-20 mt-5">


      <Breadcrumb className="flex-nowrap text-gray-600 my-5">
        <BreadcrumbList className="flex items-center gap-1">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="text-lg hover:text-gray-900">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="mx-1"></BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dogs" className="text-lg hover:text-gray-900">Dog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="mx-1"></BreadcrumbSeparator>

          <BreadcrumbItem>
            <span className="text-lg font-semibold">Small Dog</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>


      {/* Card */}
      <Card className="relative bg-transparent rounded-3xl overflow-hidden shadow-md">
        <div className="flex flex-row w-full h-full">

          <div className="bg-yellow-400 flex-1 rounded-tr-[80px] rounded-bl-[80px] relative overflow-hidden flex justify-center items-end">
            <Image
              src={pub}
              alt="Woman holding French Bulldog"
              className="object-cover w-full h-full rounded-none"
              style={{ objectPosition: 'bottom' }}
              priority
            />
          </div>


          <div className="bg-[#003459] flex-1 text-white rounded-tl-[80px] rounded-br-[80px] p-8 flex flex-col justify-between">
            <div className="text-right">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                One More
                <br />
                Friend
              </h1>
              <h2 className="text-xl lg:text-2xl font-semibold mb-4">
                Thousands More Fun!
              </h2>
              <p className="text-base lg:text-lg leading-relaxed mb-6">
                Having a pet means you have more joy, a new friend, a happy person
                who will always be with you to have fun. We have 200+ different pets
                that can meet your needs!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-full flex items-center"
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
      </Card>
    </div>
  );
}
