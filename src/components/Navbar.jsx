import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FolderIcon from '@mui/icons-material/Folder';
import { useState } from 'react';
import mypic from "../assets/images/mypic.jpg"
import git from "../assets/images/github.png"
import facebook from "../assets/images/facebook.png"
import instagram from "../assets/images/instagram.png"
import gmail from "../assets/images/gmail.png"
import ContactPageSharpIcon from '@mui/icons-material/ContactPageSharp';
import Dialog from '@mui/material/Dialog';
const Navbar = () => {
    const[open,setOpen]=useState(false)
    const[opendilog,setOpenDilog]=useState(false)
    const[value,setValue]=useState()
    const menu=[
        {
            name:"Home",
            link:"#Home",
            icon:<HomeIcon/>
        },
        {
            name:"About",
            link:"#About",
            icon:<InfoIcon/>
        },
        {
            name:"Project",
            link:"#Project",
            icon:<FolderIcon/>
        },
        {
            name:"Contact",
            link:"#Contact",
            icon:<ContactPageSharpIcon/>
        },
       
    ]

    const social=[
        {
            name:"My Github Account",
            link:"https://github.com/jayshankar-Dey",
            img:git
        },
        {
            name:"My Facebook Account",
            link:"https://www.facebook.com/jayshankar.dey",
            img:facebook
        },
        {
            name:"My Instagram Account",
            link:"https://www.instagram.com/deyjayshankar/",
            img:instagram
        },
    ]
  return (
    <div className="w-full z-20 h-16 p-1 border rounded-md shadow-lg  bg-zinc-900 border-gray-600 sticky  
     text-white top-0 left-0 bottom-0 ">
         <Dialog open={opendilog} onClose={()=>setOpenDilog(!opendilog)}>
          <div>
            <img src={value} alt="" />
          </div>
      </Dialog>
     <div className='px-3 flex items-center justify-between h-full '>
       <div className='flex gap-x-3'>
       <img src={mypic} alt=""  onClick={()=>{
                setOpenDilog(!opendilog)
                setValue(mypic)
            }} className='h-10 cursor-pointer  w-10 rounded-full bg-zinc-950 border shadow-md'/>
       <div>
       <h3 className='font-semibold text-[15px]'>JayShankar Dey</h3>
       <p className='text-[13px] text-green-600'>MernStack Devloper</p>
       </div>
       </div>
       <div>
       {
        open?<button className='text-green-400' onClick={()=>setOpen(!open)}><ClearIcon fontSize='medium'/></button>:<button className='text-green-400' onClick={()=>setOpen(!open)}><MenuIcon fontSize='medium'/></button>
       }
       </div>
     </div>
     {/* ///sidemenu */}
     <div className={` duration-300 top-0 ${open?"-translate-x-1":"-translate-x-[400%]"} translate-y-1  z-10  h-screen w-full md:bg-green-500 flex z-20 `} >
        <ul className=' flex flex-col gap-4 pt-5 w-96 bg-white h-screen'>
            {
                menu.map((menu,i)=>(
                    <li key={i} onClick={()=>setOpen(!open)} className='flex gap-x-4 w-full p-2 hover:bg-zinc-200 duration-300 cursor-pointer'>
                        <span className='text-green-500'>{menu.icon}</span>
                        <a className='text-blue-900' href={menu.link}>{menu.name}</a>
                    </li>
                ))
            }
        </ul>
        <div className='md:flex   md:flex-col  hidden w-[50%] md:p-2 '>
            <img src={mypic} alt="" onClick={()=>{
                setOpenDilog(!opendilog)
                setValue(mypic)
            }}  className='cursor-pointer w-20 h-20 my-4 mt-10 rounded-full border shadow-md mx-auto'/>
            <h1 className='text-center w-full text-2xl font-sans font-semibold'>Wellcome to Portfolio World</h1>
            <p className='text-center w-full text-[14px] text-gray-200'>amet consectetur adipisicing elit. Quisquam, ullam? Unde ex aperiam odit dolorem beatae cumque praesentium qui! Suscipit.</p>
            
             <div >
             <ul className=' flex flex-col gap-y-4 mt-10'>
                {
           social.map((social,i)=>(
              <li key={i} className='flex items-center p-2 hover:bg-green-600'>
                <img src={social.img} alt="" className='h-5 w-5 mx-3' />
                <a href={social.link}>{social.name}</a>
              </li>
           ))
                }

                <li className='flex gap-x-3 mx-5 mt-7'>
                    <img src={gmail} alt=""  className='w-5 h-5 '/>
    
                   <a href="mailto:deyjayshankar@gmail.com">Email Me <br />
                   <span className='text-gray-200 text-[14px]'>deyjayshankar@gmail.com</span>
                   </a>
                   
        
                </li>
              </ul>
             </div>
            
        </div>

     </div>
     {/* ///endmenu */}
    </div>
  )
}

export default Navbar
