import React from 'react'
import cover from "@/assets/images/angels.jpg"
import Image from 'next/image'
import { CgEnter } from 'react-icons/cg'


function page({params}:{params:{id: string}}) {
  return (
    <div className="w-full h-screen flex flex-col sm:gap-5">
        <div className="w-full h-1/2 bg-cover blur-lg opacity-35" style={{ backgroundImage: `url(${cover.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        </div>
        <div className="absolute w-full flex p-3 gap-3 sm:gap-10">
            <Image src={cover} alt="" width={100} height={100} className='rounded-lg min-w-32 max-w-52 w-32 sm:w-52' />
            <div className=' mr-3 w-3/4 flex flex-col justify-between text-white'>
                <div className=' text-xl sm:text-5xl'>
                Angels & Demons
                </div>
                <div className=' text-sm sm:text-2xl flex'>

                    <div>Horror</div>
                    <div>Thriller</div>
                    <div>Comedy</div>

                </div>
                <div className='sm:text-2xl'>
                Dan Brown
                </div>
                <div className='sm:text-2xl'>
                1998
                </div>
                <div className='sm:text-2xl'>
                567 <small>pages</small>
                </div>
                <div className='flex justify-end gap-4'>
                <button className=' bg-gray-500 sm:w-32 sm:h-10 w-20 sm:rounded-xl rounded-lg'>add</button>
                <button className=' bg-gray-500 sm:w-32 sm:h-10 w-20 sm:rounded-xl rounded-lg'>test</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page