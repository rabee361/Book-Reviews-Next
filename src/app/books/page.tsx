import Image from 'next/image'
import React from 'react'
import angels from "@/assets/images/angels.jpg"
import { FaStar } from 'react-icons/fa6'

function Book() {
  return (
    <div className='flex mt-10'>
        <aside className='flex flex-col gap-3 w-1/5'>
          <div>
            category1
          </div>
          <div>
            category2
          </div>
          <div>
            category3
          </div>
        </aside>
        <div className='grid grid-cols-6 grid-rows-10 w-4/5'>
          <div className='p-2 flex flex-col items-center justify-center'>
              <Image className='rounded-sm w-full' src={angels} alt="img" width={100} height={100} />
              <div className='flex items-center justify-between w-full'>
                  <span className='text-sm text-left flex items-center gap-1'>3<FaStar color='yellow'/></span>
                  <span className='text-sm text-left'>2k reviews</span>
              </div>
          </div>
          <div className='p-2 flex flex-col items-center justify-center'>
              <Image className='rounded-sm w-full' src={angels} alt="img" width={100} height={100} />
              <div className='flex items-center justify-between w-full'>
                  <span className='text-sm text-left flex items-center gap-1'>3<FaStar color='yellow'/></span>
                  <span className='text-sm text-left'>2k reviews</span>
              </div>
          </div>
          <div className='p-2 flex flex-col items-center justify-center'>
              <Image className='rounded-sm w-full' src={angels} alt="img" width={100} height={100} />
              <div className='flex items-center justify-between w-full'>
                  <span className='text-sm text-left flex items-center gap-1'>3<FaStar color='yellow'/></span>
                  <span className='text-sm text-left'>2k reviews</span>
              </div>
          </div>
          <div className='p-2 flex flex-col items-center justify-center'>
              <Image className='rounded-sm w-full' src={angels} alt="img" width={100} height={100} />
              <div className='flex items-center justify-between w-full'>
                  <span className='text-sm text-left flex items-center gap-1'>3<FaStar color='yellow'/></span>
                  <span className='text-sm text-left'>2k reviews</span>
              </div>
          </div>
          <div className='p-2 flex flex-col items-center justify-center'>
              <Image className='rounded-sm w-full' src={angels} alt="img" width={100} height={100} />
              <div className='flex items-center justify-between w-full'>
                  <span className='text-sm text-left flex items-center gap-1'>3<FaStar color='yellow'/></span>
                  <span className='text-sm text-left'>2k reviews</span>
              </div>
          </div>
          <div className='p-2 flex flex-col items-center justify-center'>
              <Image className='rounded-sm w-full' src={angels} alt="img" width={100} height={100} />
              <div className='flex items-center justify-between w-full'>
                  <span className='text-sm text-left flex items-center gap-1'>3<FaStar color='yellow'/></span>
                  <span className='text-sm text-left'>2k reviews</span>
              </div>
          </div>
          <div className='p-2 flex flex-col items-center justify-center'>
              <Image className='rounded-sm w-full' src={angels} alt="img" width={100} height={100} />
              <div className='flex items-center justify-between w-full'>
                  <span className='text-sm text-left flex items-center gap-1'>3<FaStar color='yellow'/></span>
                  <span className='text-sm text-left'>2k reviews</span>
              </div>
          </div>
          <div className='p-2 flex flex-col items-center justify-center'>
              <Image className='rounded-sm w-full' src={angels} alt="img" width={100} height={100} />
              <div className='flex items-center justify-between w-full'>
                  <span className='text-sm text-left flex items-center gap-1'>3<FaStar color='yellow'/></span>
                  <span className='text-sm text-left'>2k reviews</span>
              </div>
          </div>
          <div className='p-2 flex flex-col items-center justify-center'>
              <Image className='rounded-sm w-full' src={angels} alt="img" width={100} height={100} />
              <div className='flex items-center justify-between w-full'>
                  <span className='text-sm text-left flex items-center gap-1'>3<FaStar color='yellow'/></span>
                  <span className='text-sm text-left'>2k reviews</span>
              </div>
          </div>
          <div className='p-2 flex flex-col items-center justify-center'>
              <Image className='rounded-sm w-full' src={angels} alt="img" width={100} height={100} />
              <div className='flex items-center justify-between w-full'>
                  <span className='text-sm text-left flex items-center gap-1'>3<FaStar color='yellow'/></span>
                  <span className='text-sm text-left'>2k reviews</span>
              </div>
          </div>
          <div className='p-2 flex flex-col items-center justify-center'>
              <Image className='rounded-sm w-full' src={angels} alt="img" width={100} height={100} />
              <div className='flex items-center justify-between w-full'>
                  <span className='text-sm text-left flex items-center gap-1'>3<FaStar color='yellow'/></span>
                  <span className='text-sm text-left'>2k reviews</span>
              </div>
          </div>
          <div className='p-2 flex flex-col items-center justify-center'>
              <Image className='rounded-sm w-full' src={angels} alt="img" width={100} height={100} />
              <div className='flex items-center justify-between w-full'>
                  <span className='text-sm text-left flex items-center gap-1'>3<FaStar color='yellow'/></span>
                  <span className='text-sm text-left'>2k reviews</span>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Book