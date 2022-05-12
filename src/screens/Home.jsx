import React from 'react'
import { useNavigate } from "react-router-dom";
import '../App.css'

function Home() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/about'; 
    navigate(path);
  }


  return (
    <div className='home-container h-screen w-screen'>
      <section className='flex justify-center items-center flex-col h-screen w-screen '>
        <h1 className='s1 font-bold text-2xl'>Iffat Hossain</h1>
        <h4 className='home-screen-short my-5 px-10 text-lg ' > Im a software engineer who enjoys learning about new technologies, music, and watching F1. </h4>
        <button onClick={routeChange} className='home-screen-about-btn px-10 py ' > More </button>
      </section>

      <section className='flex  items-center flex-col h-screen w-screen '>
        <h1>Projects</h1>
        <h3>Guess Work</h3>

      </section>  


      <section>
        <h1>page 3</h1>
      </section>
      <section>
        <h1>page 4</h1>
      </section>



    </div>
  )
}

export default Home