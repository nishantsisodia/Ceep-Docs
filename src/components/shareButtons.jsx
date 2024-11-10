import { useEffect, useState, } from 'react';
import { ShareSocial } from 'react-share-social';
import { IoCloseOutline } from "react-icons/io5";



function RSSUsage( {setShowPopup, showPopup, }) {


const url = window.location.href
  const style = {
    root: {
      background: "linear-gradient(45deg, #005f73 30%, #23272A 90%)",
      width:"400px",
      borderRadius: 3,
      border: 0,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
    },
    copyContainer: {
      border: '1px solid blue',
      background: 'rgb(39, 39, 42)'
    },
    title: {
      color: 'aquamarine',
      fontStyle: 'italic'
    }
  };

  return (

<>
{showPopup && <div className='fixed w-full h-screen border bg-zinc-600/0 z-[700]'></div>}
    <div
      className="fixed z-[700] transition-all duration-100 ease-out  "
      style={{
          bottom: '20px',
          left: '50%',
          transform: showPopup ? 'translate(-50%, -130%)' : 'translate(-50%, 100%)',
          opacity: showPopup ? 1 : 0,
          transition: 'transform 0.2s ease-out, opacity 0.2s ease-out'
        }}
        >

         <IoCloseOutline className='text-white relative left-[90%] top-10 z-40 text-2xl cursor-pointer' onClick={()=>setShowPopup(false)}/>

      <ShareSocial
        url={url}
        socialTypes={['facebook', 'twitter', 'whatsapp', 'linkedin']}
        style={style}

        />
    </div>
        </>

  );
}

export default RSSUsage;
