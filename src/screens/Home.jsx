import React from 'react'
import { useNavigate } from "react-router-dom";
import jslogo from '../components/images/js_logo.jpeg'
import htmllogo from '../components/images/htmllogo.png'
import csslogo from '../components/images/csslogo.png'
import reactlogo from '../components/images/reactlogo.png'
import mongodblogo from '../components/images/mongodblogo.png'
import expresslogo from '../components/images/expresslogo.png'
import mongodb from '../components/images/mongodb.png'

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
        <div className='s1 font-bold text-2xl'>Iffat Hossain</div>
        <div className='home-screen-short my-5 px-5 text-lg ' > Im a software engineer who enjoys learning about new technologies, music, and watching F1. </div>
        <button onClick={routeChange} className='home-screen-about-btn px-10 py ' > More </button>
      </section>

      <section className=''>
       
        <div className='m-auto '>
          <div className='flex flex-col justify-center w-full px-2 py-8 md:items-start '>
            <div className=' text-2xl px-5 '>-Project-</div>
              <div className='text-2xl font-bold py-3 px-5 md:text-4xl '>Guess Work</div>
               <p className='my-2 px-5 text-lg'> I created a variation of hangman called "Guess Work" using vanilla JavaScript, where one player has the option to enter a word which will be guessed by the second player, or a solo player can attempt to guess a random word before they run out of attempts. </p>
                <ul className='my-1 p-4 flex '>
                 <li><img className='h-20 rounded-md border-solid border-2 border-slate-100  hover:drop-shadow-md ' src={htmllogo}/></li>
                 <li><img className='h-20 rounded-md border-solid border-2 border-slate-100  hover:drop-shadow-md ' src={csslogo}/></li>
                 <li><img className='h-20 rounded-md hover:drop-shadow-md' src={jslogo}/></li>  
                </ul>
              </div>
           </div>

        <div className='m-auto'>
          <div className='flex flex-col justify-center w-full px-2 py-8 md:items-start '>
            <div className=' text-2xl px-5 '>-Collabrative Project-</div>
              <div className='text-2xl font-bold py-3 px-5 md:text-4xl '>Nyc Arc</div>
                <p className='my-2 px-5 text-lg '> A website to introduce the architecture and skyscrapers of New York City, and a curated list of iconic sites around the city which users can update.  </p>
                <ul className='my- px-4 flex '>
                  <li><img className='h-20 w-20 rounded-md hover:drop-shadow-md' src={jslogo}/></li> 
                  <li><img className='h-20 w-20 rounded-md border-solid  border-slate-100  hover:drop-shadow-md ' src={reactlogo}/></li>
                  <li><img className='h-20 w-20 rounded-md border-solid  border-slate-100  hover:drop-shadow-md ' src={mongodb}/></li>
                  <li><img className='h-20  rounded-md border-solid  border-slate-100  hover:drop-shadow-md ' src={expresslogo}/></li>
                </ul>
             </div>
           </div>
      </section>  


      <section className='flex justify-center items-center flex-col h-screen w-screen '>
       <div className='m-auto '>
          <div className='flex flex-col justify-center w-full px-2 py-8 md:items-start '>
            <h1 className='text-2xl px-5' >page 3</h1>
              <div className='text-2xl font-bold py-3 px-5 md:text-4xl '>Guess Work</div>
               <p className='my-2 px-5 text-lg'> I created a variation of hangman called "Guess Work" using vanilla JavaScript, where one player has the option to enter a word which will be guessed by the second player, or a solo player can attempt to guess a random word before they run out of attempts. </p>
                <ul className='my-1 px-4 flex '>
                 <li>-HTML</li>
                 <li>-CSS</li>
                 <li>-JavaScript</li>  
                 <li>-Axios</li>
                </ul>
              </div>
           </div>
      </section>




    </div>
  )
}

export default Home