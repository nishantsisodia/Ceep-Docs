import React, { useContext, useState } from 'react'
import Background from '../../components/Background'
import Foregorund from '../../components/Foregorund'
import Navbar from '../../components/Navbar'
import Alldata, { DataContext } from '../context/Alldata'
import ShareButtons from '../../components/shareButtons'

const CreateDocs = () => {

  const data = useContext(DataContext)
  const setShowPopup = data.setShowPopup
  const showPopup = data.showPopup
  const [inputValue, setInputValue] = useState("");
  const [inputValues, setInputValues] = useState([]);
  const [warning, setWarning] = useState(false)

  // Function to store data
  const dataStore = (e) => {
    e.preventDefault();

if(inputValue.length > 3)
  {    // Retrieve existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem("data")) || [];

    // Merge new data with the existing one
    const updatedData = [...existingData, inputValue];

    // Store updated data in localStorage
    localStorage.setItem("data", JSON.stringify(updatedData));

    // Update state with the new data
    setInputValues(updatedData);

    // Optionally redirect or reset input
    setInputValue(""); // Clear input after storing
    window.location.href = "/"}

    else{
setWarning(true)
    }
  };

  // Use this in your JSX for input and button
  // <form onSubmit={dataStore}>
  //   <input
  //     type="text"
  //     value={inputValue}
  //     onChange={(e) => setInputValue(e.target.value)}
  //   />
  //   <button type="submit">Add Note</button>
  // </form>




  return (
    <>
    <div className=' relative  w-full h-[90vh] sm:h-screen bg-zinc-800   '>
    <ShareButtons  setShowPopup={setShowPopup} showPopup={showPopup} className="absolute z-[700]"/>
      <Navbar setShowPopup={setShowPopup} name="Previous" address="/"/>
    <Background/>
    <div className=' p-3 w-full h-[95%] top-14 left-0 fixed z-[3] flex flex-wrap gap-10 text-white'>
      <form className='w-full h-full' action="" method='post' onSubmit={(e)=>dataStore(e)}>
 <input className='bg-blue-800 px-4 py-2 rounded-md ml-2 text-sm cursor-pointer fixed right-32 top-[14px] z-20 shadow-xl'  type="submit" value="Save" />
<div className='w-full h-full '><textarea minLength={3} className={`w-full h-full bg-transparent p-3 outline-none ${warning ? `placeholder:text-red-500`:`text-white`}`} name="input" onChange={(e)=>setInputValue(e.target.value)} value={inputValue} id="" placeholder='Write Notes' ></textarea></div>
      </form>

    </div>

        </div>
    </>
  )
}

export default CreateDocs
