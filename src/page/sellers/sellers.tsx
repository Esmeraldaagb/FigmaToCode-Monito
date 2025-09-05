'use client'

import { Button } from '@/components/ui/button'
import { sellersData } from '@/data/db'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Sellers() {
  return (
    <div className='mx-20 py-10 hidden md:block'>
      <div className='flex justify-between items-center mb-10'>
        <span className='flex gap-3 items-center'>
          Proud to be part of 
          <p className='text-xl text-[#003459] font-bold'>Pet Sellers</p>
        </span>
        <Button asChild variant="outline" className='rounded-full border-[#003459]'>
          <div className='flex items-center gap-2'>
            View all our Sellers
            <ChevronRight className='w-4 h-4'/>
          </div>
        </Button>
      </div>

      <div className='overflow-hidden'>
        <div className='flex justify-between animate-scroll-simple'>
          {sellersData.map((sel, index) => (
            <div key={sel.id} className='flex-shrink-0 group'>
              <Image
                src={sel.img ?? "/logo.png"} 
                alt="sellers logo"
                width={100}
                height={100}
                className='transition-all duration-500 ease-out hover:scale-125 hover:rotate-12 hover:brightness-110 cursor-pointer rounded-lg'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sellers