import React, { useContext, useState, useEffect } from 'react'
import Background from '../../components/Background'
import Foregorund from '../../components/Foregorund'
import Navbar from '../../components/Navbar'
import Alldata, { DataContext } from '../context/Alldata'
import { useLocation } from 'react-router-dom'
import ShareButtons from '../../components/shareButtons'

const ReadPage = () => {
    const location = useLocation();
    const data = useContext(DataContext)
    const setShowPopup = data.setShowPopup
    const showPopup = data.showPopup
    const [inputValue, setInputValue] = useState(data);
    const [inputValues, setInputValues] = useState([]);

    useEffect(() => {
        // Selected note ko set karne ke liye
        if (location.state && location.state.note) {
            setInputValue(location.state.note);
        }
    }, [location]);

    // Function to store data
    const dataStore = (e) => {
        e.preventDefault();

        // Retrieve existing data from localStorage
        const existingData = JSON.parse(localStorage.getItem("data")) || [];
        const updatedData = existingData.map(note => note === location.state.note ? inputValue : note); // Update the note
        // Merge new data with the existing one


        // Store updated data in localStorage
        localStorage.setItem("data", JSON.stringify(updatedData));

        // Update state with the new data
        setInputValues(updatedData);

        // Optionally redirect or reset input
        setInputValue(""); // Clear input after storing
        window.location.href = "/"
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

            <div className=' relative  w-full h-[90vh] sm:h-screen bg-zinc-800 '>
                <Navbar setShowPopup={setShowPopup} name="Previous" address="/" />
                    <ShareButtons  setShowPopup={setShowPopup} showPopup={showPopup} className="absolute z-[700]"/>
                <Background />
                <div className=' p-3 w-full h-[95%] top-14px left-0 fixed z-[3] flex flex-wrap gap-10 text-white'>
                    <form className='w-full h-full' action="" method='post' onSubmit={(e) => dataStore(e)}>
                        <input className='bg-blue-800 px-4 py-2 rounded-md ml-2 text-sm cursor-pointer fixed right-[154px] top-[14px]  z-20 shadow-xl' type="submit" value="Save" />
                        <div className='w-full h-full '><textarea className='w-full h-full bg-transparent p-3 outline-none' name="input" onChange={(e) => setInputValue(e.target.value)} value={inputValue} id="" placeholder='Write Notes' ></textarea></div>
                    </form>

                </div>

            </div>
        </>
    )
}

export default ReadPage
