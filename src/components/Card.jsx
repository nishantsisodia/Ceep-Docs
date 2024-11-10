import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"
import {ShareSocial} from 'react-share-social'

const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.1}  dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className=' flex-shrink-0 relative w-56 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-5 overflow-hidden'>
        <FaRegFileAlt className='text-lg ' />
        <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
        <div className="footer absolute bottom-0  w-full left-0">

            <div className='flex justify-between items-center  px-8 py-3 mb-3  '>
             <h5>{data.fileSize}</h5>
             {data.close ? <IoIosCloseCircle className='text-xl' />:<MdDownloadForOffline className='text-xl' />}

            </div>
            {data.tag.isOpen && (

            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue"? "bg-blue-600":"bg-green-600"} flex justify-center items-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
            )}
        </div>
    </motion.div>

  )
}

export default Card
