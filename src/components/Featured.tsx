
// import axios from 'axios'
import React from 'react'
// import { useQuery } from '@tanstack/react-query'
// import { useState } from 'react'
import {  motion } from 'framer-motion'
import Image from 'next/image'
import angels from "@/assets/images/angels.jpg"
import { FaStar } from "react-icons/fa";
import fetchGenres from '@/data-resource/actions'


async function Featured() {
    // const [selectedId, setSelectedId] = useState(null)

    // const {data,isLoading,error} = useQuery('books' , fetchBooks)

    // if (isLoading) return <div>Loading</div>
    // if (error) return <div>{error.message}</div>

    const genres = await fetchGenres();
    

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden py-3 text-white">
        <div className="text-center flex gap-5 mb-5">
            {
                genres.map((genre) => (
                    <h1 key={genre.id} className="text-md font-serif hover:text-gray-400 ease-linear duration-150">{genre.name}</h1>
                ))
            }
        </div>
        <div className='grid grid-cols-7 grid-rows-2 gap-x-10 gap-y-5'>
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
                    <span className='text-sm text-left'>2k reviews</span>
                    <span className='text-sm text-left flex items-center gap-1'>3<FaStar color='yellow'/></span>
                </div>
            </div>
            <div className='p-2 flex flex-col items-center justify-center'>
                <Image className='rounded-sm w-full' src={angels} alt="img" width={100} height={100} />
                <div className='flex items-center justify-between w-full'>
                    <span className='text-sm text-left'>2k reviews</span>
                    <span className='text-sm text-left flex items-center gap-1'>3<FaStar color='yellow'/></span>
                </div>
            </div>
            <div className='p-2 flex flex-col items-center justify-center'>
                <Image className='rounded-sm w-full' src={angels} alt="img" width={100} height={100} />
                <div className='flex items-center justify-between w-full'>
                    <span className='text-sm text-left'>2k reviews</span>
                    <span className='text-sm text-left flex items-center gap-1'>3<FaStar color='yellow'/></span>
                </div>
            </div>
            <div className='p-2 flex flex-col items-center justify-center'>
                <Image className='rounded-sm w-full' src={angels} alt="img" width={100} height={100} />
                <div className='flex items-center justify-between w-full'>
                    <span className='text-sm text-left'>2k reviews</span>
                    <span className='text-sm text-left flex items-center gap-1'>3<FaStar color='yellow'/></span>
                </div>
            </div>
            <div className='p-2 flex flex-col items-center justify-center'>
                <Image className='rounded-sm w-full' src={angels} alt="img" width={100} height={100} />
                <div className='flex items-center justify-between w-full'>
                    <span className='text-sm text-left'>2k reviews</span>
                    <span className='text-sm text-left flex items-center gap-1'>3<FaStar color='yellow'/></span>
                </div>
            </div>
        </div>
    </div>
  )
}


// async function fetchBooks() {
//     try{
//         const response = await axios.get('http://127.0.0.1:8000/api/featured/')
//         return response.data
//     } catch{
//         return "Network error"
//     }

// }


export default Featured