import reacticon from "../assets/images/atom.png"
import css from "../assets/images/css.png"
import html from "../assets/images/html-5.png"
import node from "../assets/images/node-js.png"
import sql from "../assets/images/mysql.png"
import javaScript from "../assets/images/java-script.png"
import php from "../assets/images/php.png"
import Django from "../assets/images/django.svg"
import Python from "../assets/images/python.png"
import mongo from "../assets/images/setting.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal"
import Dialog from '@mui/material/Dialog';
const Skils = () => {
    const[opendilog,setOpenDilog]=useState(false)
    const[value,setValue]=useState({})
    useEffect(()=>{
Aos.init({
    offset: 200,
    duration: 400,
    easing: 'ease-in-sine',
   
})
    },[])
    const skils=[
        {
            name:"PHP",
            img:php,
            persent:40
        },
        {
            name:"Python",
            img:Python,
            persent:50
        },
        {
            name:"Sql",
            img:sql,
            persent:60
        },
        {
            name:"React js",
            img:reacticon,
            persent:65
        },
        {
            name:"JavaScript",
            img:javaScript,
            persent:50
        },
        {
            name:"Django",
            img:Django,
            persent:40
        },
        {
            name:"Node js",
            img:node,
            persent:50
        },
        {
            name:"Himl",
            img:html,
            persent:80
        },
        {
            name:"CSS",
            img:css,
            persent:70
        },
        {
            name:"MongoDb",
            img:mongo,
            persent:60
        },

    ]
  return (
   <section>
    <Dialog open={opendilog} onClose={()=>setOpenDilog(!opendilog)}>
          <div className="w-96 h-fit p-3">
            <img src={value.img} alt=""  className="h-40 md:h-fit"/>
            <h3 className="font-bold">{value.name}</h3>
            <h2 className="px-3 text-white font-bold mt-2 w-80 md:w-auto  rounded-full bg-green-500">{value.persent}%</h2>
          </div>
      </Dialog>
    <div className="text-center p-3 ">
        <h1   className="md:text-2xl text-xl">Skils Section</h1>
        <p className="text-[14px] text-gray-400"> dolor sit amet consectetur adipisicing elit. Animi, neque.</p>
    </div>
     <div  className="md:p-2 p-4 bg-zinc-900 border border-gray-500 mt-2 rounded-md">
      <ul className="flex md:flex-row justify-stretch flex-col flex-wrap gap-3">
        {
            skils.map((skil,i)=>(
                <Fade key={i} delay={300*i} >
                <li  onClick={()=>{
                    setValue(skil)
                    setOpenDilog(!opendilog)
                }} className="p-2 bg-zinc-800 flex items-center gap-x-3 border rounded-md border-gray-400 shadow-md shadow-black  cursor-pointer">
                    <img src={skil.img} alt={skil.name} className="h-10"/>
                    <h3>{skil.name}</h3>
                    <h2 className="px-3  rounded-full bg-green-500">{skil.persent}%</h2>
                </li>
                </Fade>
            ))
        }
      </ul>
    </div>
   </section>
  )
}

export default Skils
