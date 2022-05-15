import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import jslogo from '../components/images/js_logo.jpeg'
import htmllogo from '../components/images/htmllogo.png'
import csslogo from '../components/images/csslogo.png'
import reactlogo from '../components/images/reactlogo.png'
import mongodblogo from '../components/images/mongodblogo.png'
import expresslogo from '../components/images/expresslogo.png'
import mongodb from '../components/images/mongodb.png'
import guesswork from '../components/images/guesswork.png'
import Nycarc from '../components/images/Nycarc.png'

import '../App.css'

function Home() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/about'; 
    navigate(path);
  }

  const handleClickArc = () => {
    window.open("https://guileless-sprinkles-26705e.netlify.app/","_blank");
  }

  const handleClickGuess = () => {
    window.open("https://iffat77.github.io/frontend-game/","_blank");
  }



  return (
    <div className='home-container'>
      
      <section id='top' className='h-screen w-screen flex justify-center items-center'>
       <div className='flex flex-col gap-5 justify-center w-9/12 px-2 py-8 md:items-start border-solid md:border-none border-2 rounded-md'>
        <h1 className='font-bold text-center text-2xl md:text-4xl'>Iffat Hossain</h1>
        <p className='' > Im a software engineer who enjoys learning about new technologies, music, and watching F1. </p>
       </div>         
      </section>

      <section id='about' className='h-screen w-screen flex justify-center items-center'>
       <div className='flex flex-col gap-5 justify-center w-9/12 px-2 py-8 md:items-start border-solid md:border-none border-2 rounded-md'>
        <h1 className='font-bold text-center text-2xl md:text-4xl'> About </h1>
        <p className=''> I am a Software Engineer who is motivated by finding innovative and efficient ways to improve products that impact people's daily lives. My passions include music, racing, and full-stack development in all of these areas of my life. I enjoy studying the way technology can optimize processes. I spent time learning Ableton Live software to create music, and am an avid fan of Formula 1 Racing where races are won not only by skilled drivers but by the teams that can make the most efficient vehicles and utilize their features well. As a developer I take this inspiration to think outside of the box to create efficient projects with clean and simple code. Collaborating is deeply important to me; having accessible code for my peers to interact with and making sure every teammate's voice is heard throughout the process leads to optimal results. I pride myself on contributing creative ideas, an ability to actively listen, and dedication for my craft.</p>
       </div>
      </section>
    
      <div className='m-2'>
        <h1 className='text-center my-20'>Checkout some of my projects below!</h1>
      </div>
      
      <section id='projects' className='my-5 md:flex md:flex-row h-full w-screen md:mt-12 pt-12'>
       
        <div className='flex justify-center items-center md:pt-4 md:w-1/2 mb-4  sm:p0 sm:justify-center md:p-0 lg:mb-4'>
         <img onClick={handleClickGuess} className='md:object-contain  md:rounded-md  md:border-none h-3/4 w-3/4 rounded-md border-solid border-2 border-slate-100 hover:drop-shadow-md ' src={guesswork} /> 
        </div>

        <div className='flex md:w-1/2 items-center justify-center'>  
         <div className='flex flex-col justify-center w-9/12 px-2 py-8 md:items-start border-solid md:border-none border-2 rounded-md'>
          <div className='text-2xl text-center font-bold py-3 px-5 md:text-4xl '>Guess Work</div>
          <p className='my-2 px-5 text-lg'> I created a variation of hangman called "Guess Work" using vanilla JavaScript, where one player has the option to enter a word which will be guessed by the second player, or a solo player can attempt to guess a random word before they run out of attempts. </p>
          <ul className='my-1 p-4 w-full flex justify-center '>
           <li><img className='h-20 rounded-md border-solid border-2 border-slate-100  hover:drop-shadow-md ' src={htmllogo}/></li>
           <li><img className='h-20 rounded-md border-solid border-2 border-slate-100  hover:drop-shadow-md ' src={csslogo}/></li>
           <li><img className='h-20 rounded-md hover:drop-shadow-md' src={jslogo}/></li>  
          </ul>
         </div>
        </div>

      </section>  


      <section className='my-5 md:flex md:flex-row h-full '>
        
        <div className='flex justify-center items-center md:w-1/2 mb-4 sm:mb-4 sm:p0 sm:justify-center md:p-0 md:mb-4 lg:mb-4'>
          
          <img onClick={handleClickArc} className='md:object-cover lg:object-contain md:rounded-md md:border-none h-3/4 w-3/4 rounded-md border-solid border-2  border-slate-100 hover:drop-shadow-md' src={Nycarc} />
        
        </div>
        
        <div className='flex md:w-1/2 items-center justify-center'>
         <div className='flex flex-col justify-center w-9/12 px-2 py-8 md:items-start border-solid border-2 md:border-none rounded-md overflow-y-scroll'>
          <div className='text-2xl text-center font-bold py-3 px-5 md:text-4xl '>Nyc Arc</div>
          <p className='my-2 px-5 text-lg '> A website to introduce the architecture and skyscrapers of New York City, and a curated list of iconic sites around the city which users can update.  </p>
          <ul className='px-4 flex flex-col sm:flex-row md:flex-col lg:flex-row '>
           <li><img className='h-10 w-10 sm:h-20 sm:w-20 rounded-md hover:drop-shadow-md' src={jslogo}/></li> 
           <li><img className='h-10 w-10 sm:h-20 sm:w-20 rounded-md border-solid  border-slate-100  hover:drop-shadow-md ' src={reactlogo}/></li>
           <li><img className='h-10 w-10 sm:h-20 sm:w-20 rounded-md border-solid  border-slate-100  hover:drop-shadow-md ' src={mongodb}/></li>
           <li><img className='h-10 sm:h-20 rounded-md border-solid  border-slate-100  hover:drop-shadow-md ' src={expresslogo}/></li>
          </ul>
         </div>
        </div>

      </section>

      <section id='contact' className='h-screen w-screen flex justify-center items-center mt-10 pt-8'>

        <div className='mt-10 pt-8 flex justify-center items-center flex-col gap-10'>
          <h1>Reach Out! </h1>
          <a className='email-button' href='mailto:iffathossain77@gmail.com' target="_blank"><button>Let's Work</button></a>
       </div> 

      </section>




    </div>
  )
}

export default Home