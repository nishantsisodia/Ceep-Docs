import React, { createContext, useEffect, useState } from 'react'
import { json } from 'react-router-dom';

export const DataContext = createContext()
const Alldata = ({children}) => {
   const [datas, setDatas] = useState(null)
   const [showPopup, setShowPopup] = useState(false);


   useEffect(() => {
    let data = localStorage.getItem("data");
    let parseData = JSON.parse(data);

    if (parseData) {
      setDatas(parseData);
    }

 // LocalStorage se parsed data ko log karenge
  }, []);

  // Datas state jab bhi update ho, useEffect chalega
  useEffect(() => {
    console.log(datas , "ye data");

  // State update ke baad datas ko log karenge
  }, [datas]);






  return (
<div className='max-h-screen'>
  <DataContext.Provider value={{ datas, setShowPopup, showPopup }}>
    {children}
  </DataContext.Provider>
</div>
  )
}

export default Alldata
