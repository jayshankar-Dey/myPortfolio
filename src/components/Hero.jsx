/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Button } from "@mui/material"
import img1 from "../assets/images/3d5.png"
import img2 from "../assets/images/3d6.png"
import img3 from "../assets/images/3d7.png"
// eslint-disable-next-line no-unused-vars
import img4 from "../assets/images/3d8.png"
import { Typewriter } from 'react-simple-typewriter'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import { Fade, Slide } from "react-awesome-reveal";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const Hero = () => {
  useEffect(()=>{
    Aos.init({
        offset: 200,
        duration: 400,
        easing: 'ease-in-sine',
       
    })
        },[])
  return (
    <section id="Home" className="flex md:flex-row flex-col md:h-96 my-2 bg-zinc-900 border border-gray-600  rounded-md shadow-md">
      <div data-aos="fade-right" className="md:w-[50%] w-full ">
        <img src={img3} alt="" />
      </div>
      <div  className="md:w-[50%]  pb-10 md:pb-0 p-5 md:p-0">

       <div className="w-full md:mt-16 mt-6 ">
       <Fade  delay={1e3} cascade damping={1e-1}> 
       <h1 className="text-xl md:text-2xl font-semibold font-mono">I'am JayShankar Dey <br />
        <span className="text-green-500">
        <Typewriter
            words={['Web Devloper', 'FullStack Devloper', 'UI/UX Devloper', 'Data Analyst!']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        </h1>
        </Fade >
        <Slide>
        <p className="text-[14px] text-gray-300 md:my-5 my-3">Iam a webDevloper adipisicing elit. Officiis quasi libero tempora accusamus cupiditate nemo soluta repellat quisquam, dolor ex.</p>
        </Slide>
       
       </div>
        <div className="md:mt-5 mt-2">
        <Button variant="contained" color="success" endIcon={<ArrowForwardSharpIcon />}>Hire Me</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
