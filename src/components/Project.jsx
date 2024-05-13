/* eslint-disable react/no-unescaped-entities */

import Card from "./Card"
import book from "../assets/images/bookstor.png"
import portfolioimage from "../assets/images/potfolio.jpg"
const Project = () => {
    const project=[
        {
            name:"PortFolio Project",
            img:portfolioimage,
            live:true,
            git:"https://github.com/jayshankar-Dey/portfolio",
            liveLink:"https://jayshankar-portfolio.netlify.app"
        },
        {
            name:"Social media api Node",
            live:false,
            git:"https://github.com/jayshankar-Dey/Book_Store_in_React_js",
            liveLink:"https://book-app-project.netlify.app"
        },
        {
            name:"BookStore Project",
            img:book,
            live:true,
            git:"https://github.com/jayshankar-Dey/Book_Store_in_React_js",
            liveLink:"https://book-app-project.netlify.app"
        },
        {
            name:"PortFolio Project",
            img:portfolioimage,
            live:true,
            git:"https://github.com/jayshankar-Dey/portfolio",
            liveLink:"https://jayshankar-portfolio.netlify.app"
        },
        {
            name:"Social media api Node",
            live:false,
            git:"https://github.com/jayshankar-Dey/Book_Store_in_React_js",
            liveLink:"https://book-app-project.netlify.app"
        },
        {
            name:"BookStore Project",
            img:book,
            live:true,
            git:"https://github.com/jayshankar-Dey/Book_Store_in_React_js",
            liveLink:"https://book-app-project.netlify.app"
        }
    ]
  return (
    <section id="Project">
       <div className="text-center p-3 ">
        <h1   className="md:text-2xl text-xl">Project's </h1>
        <p className="text-[14px] text-gray-400"> Project consectetur adipisicing elit. Animi, neque.</p>
    </div>
     <div className="p-2 ">
      <div className="flex gap-x-3 gap-y-1 justify-center flex-wrap">
        {
            project.map((project,i)=>(
                <Card key={i} project={project}/>
            ))
        }
       
       
      </div>
     </div>
    </section>
  )
}

export default Project
