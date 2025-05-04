import AOS from "aos"
import "aos/dist/aos.css";
import './App.css'
import { useEffect, useState } from 'react'
import Banner from './Components/Banner/Banner';
import Navbar from "./Components/Navbar/Navbar";

function App() {
 const [orderPopup, setOrderPopup] = useState(false)


  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup);
  }
  
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white
       duration-200">
          <Navbar handleOrderPopup = {handleOrderPopup} />
          <Banner/>
      </div>
      
    </>
  )
}

export default App
