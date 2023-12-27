import React from 'react'
import { motion } from "framer-motion";

const Divider = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <div
            className="bg-gray-800 sm:h-12 w-1 rounded-full hidden sm:block"
        ></div>
    </div>
  )
}

export default Divider
