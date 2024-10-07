'use client'
import { motion } from 'framer-motion';

export default () => {
    const pageVariants = {
        initial: {
          x: "-5%", 
          opacity: 0,
        },
        in: {
          x: "0%",
          opacity: 1,
          transition: {
            duration: 1,
        },
    },
};
      
    const pageVariants2 = {
        initial2: {
        x: "5%", 
        opacity: 0,
        },
        in2: {
        x: "0%", 
        opacity: 1,
        transition: {
            duration: 1, 
        },
    },
};


    return (
        <>
            <div className="text-center">
                <motion.h1 variants={pageVariants} initial="initial" animate="in"  className="font-bold text-3xl lg:text-5xl mb-4">
                    Book Recommendations
                </motion.h1>
                <motion.p variants={pageVariants2} initial="initial2" animate="in2" className="max-w-xl mx-auto leading-relaxed text-wrap text">
                    It is a long c fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                </motion.p>
            </div>
            <motion.div variants={pageVariants2} initial="initial2" animate="in2" className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex-green-900">
                <a href="" className="px-10 py-3.5 w-full text-center font-semibold border rounded-md duration-300 hover:bg-amber-500 hover:shadow block sm:w-auto">
                    Check Our Library
                </a>
            </motion.div>
        </>
    )
}