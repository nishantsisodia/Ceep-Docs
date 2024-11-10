import React, { useEffect, useRef, useState, } from 'react'
import Card from './Card'
import Navbar from './Navbar'

import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoShareSocialSharp } from "react-icons/io5";

const Foregorund = ({ notes = [],  }) => {
  const navigate = useNavigate();



const [data, setdata] = useState([
  {fileSize:"", close:true, tag:{isOpen:true, tagTitle:"Edit Notes", tagColor:"green" } },

]
)
const handleReadNow = (note) => {
  // Jo selected note hai, usse ReadPage par bhejne ka function
  navigate('/read', { state: { note } });


};

// Set the state with initial values from localStorage or the notes prop
const [inputValues, setInputValues] = useState([]);

useEffect(() => {
  const storedData = JSON.parse(localStorage.getItem("data")) || notes;
  setInputValues(storedData);
}, [notes]);

// Function to remove an item by its index
const removeItem = (index) => {
  // Remove the item from inputValues array
  const updatedData = inputValues.filter((_, i) => i !== index);

  // Update localStorage with new data
  localStorage.setItem("data", JSON.stringify(updatedData));

  // Update the state to reflect the removed item
  setInputValues(updatedData);
};
console.log(notes);

const refff = useRef(null)


  const [isDraggable, setIsDraggable] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check screen width and set draggable state accordingly
      if (window.innerWidth > 840) {
        setIsDraggable(true);
      } else {
        setIsDraggable(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



return (
  <>
  <div ref={refff} className='flex gap-x-5 gap-y-7 fixed top-20 w-screen flex-wrap z-30 h-[85%] overflow-y-auto overflow-x-hidden p-3 '>
  {Array.isArray(inputValues) && inputValues.length > 0 ? (
  inputValues.map((item, index) => {
    let random = Math.floor(Math.random() * 60000); // Random value inside map
    console.log(random);

    return (
      <motion.div dragConstraints={refff} whileDrag={{ scale: 1.1 }} dragTransition={{ bounceStiffness: 150, bounceDamping: 30 }} drag={isDraggable} key={index} className='flex-shrink-0 relative w-[44vw] sm:w-56 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-5 overflow-hidden'>
        <FaRegFileAlt className='text-lg' />
        <p className='text-sm mt-5 font-semibold max-h-[50%] text-ellipsis overflow-hidden line-clamp-4'>
          {item || "Default description"}
        </p>
        <div className="footer absolute bottom-0 w-full left-0 ">
          <div className='flex justify-between items-center px-8 py-3 mb-2  '>
            <h5 className={`p-[7px]  rounded-full`} style={{ backgroundColor: `#f${random}` }}>{data[0].fileSize || ""}</h5>




              <MdDeleteForever
                onClick={() => removeItem(index)} // Call removeItem on click with index
                className='closeIcon text-[25px] active:bg-zinc-500 rounded-full   cursor-pointer'
                />




          </div>
          {data[0].tag.isOpen && (
            <div className={`tag w-full py-4 ${index % 2 === 0 ? "bg-green-600": "bg-blue-600"} active:bg-green-700  flex justify-center items-center cursor-pointer`} onClick={() => handleReadNow(item)}>
              <h3 className='text-[15px] font-semibold tracking-wider cursor-pointer w-full text-center '>
                {data[0].tag.tagTitle || "Read Now"}
              </h3>
            </div>
          )}
        </div>
      </motion.div>
    );
  })
) : (
  <p className='text-white font-semibold ml-1'>No notes available</p>
)}
  </div>
</>

  )
}

export default Foregorund
