import { useContext, useState,useEffect } from 'react'
import Background from './components/Background'
import Foregorund from './components/Foregorund'
import Navbar from './components/Navbar'
import Alldata, { DataContext } from './assets/context/Alldata'
import ShareButtons from './components/shareButtons'





function App() {


const data = useContext(DataContext)
const setShowPopup = data.setShowPopup
const showPopup = data.showPopup
const [datas, setDatas] = useState(null)




useEffect(() => {
 let data = localStorage.getItem("data");
 let parseData = JSON.parse(data);

 if (parseData) {
   setDatas(parseData);
 }
console.log(showPopup.showPopup, "ye rha ha ");

// LocalStorage se parsed data ko log karenge
}, []);

// Datas state jab bhi update ho, useEffect chalega




  return (
    <>
    <div className=' relative  w-full h-[90vh] sm:h-screen  bg-zinc-800'>
    <Navbar setShowPopup={setShowPopup} name="Create New" address="/create"/>
<Background/>
<Foregorund notes={data.datas} setShowPopup={setShowPopup}/>
<ShareButtons  setShowPopup={setShowPopup} showPopup={showPopup} className="absolute z-[700]"/>

    </div>

    </>
  )
}

export default App
