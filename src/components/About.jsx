import Aboutimage from "../assets/images/About.png";
import img4 from "../assets/images/3d8.png"
import git from "../assets/images/git.png"
import facebook from "../assets/images/facebook.png"
import instagram from "../assets/images/instagram.png"
import gmail from "../assets/images/gmail.png"


const About = () => {

    const social=[
        {
            name:"My Github Account",
            link:"https://github.com/name",
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
    <section   id="About" >
        <div className="text-center p-5">
            <h1 className="md:text-2xl text-xl">About Me</h1>
            <p className="text-[14px] text-gray-400"> ipsum dolor sit amet consectetur adipisicing elit. Ut, maxime?</p>
        </div>

        <div className="bg-zinc-900 md:h-fit flex md:flex-row flex-col w-full rounded-md shadow-md border border-gray-500">
      <div   className="md:w-[50%] w-full md:h-full p-4">
        <h2 className="text-xl md:text-2xl text-gray-100 mt-5"> This is informed to you that design</h2>
        <p className="text-[14px] text-gray-300 mt-3">dolor sit amet consectetur adipisicing elit. Sapiente, eligendi illum. A, dolores, possimus nihil facilis dolore at ipsa quibusdam corporis exercitationem maxime incidunt distinctio facere quidem quod similique repellendus!</p>
        <p className="text-[14px] text-gray-300 mt-3">  corporis exercitationem maxime incidunt distinctio facere quidem quod similique repellendus!</p>
        <ul className=' flex flex-col gap-y-4 mt-5 md:hidden'>
                {
           social.map((social,i)=>(
              <li   key={i} className='flex items-center p-2 hover:bg-green-600'>
                <img src={social.img} alt="" className='h-5 w-5 mx-3' />
                <a href={social.link}>{social.name}</a>
              </li>
           ))
                }

                <li className='flex gap-x-3 mx-5 mt-4'>
                    <img src={gmail} alt=""  className='w-5 h-5 '/>
    
                   <a href="mailto:name@gmail.com">Email Me <br />
                   <span className='text-gray-200 text-[14px]'>name@gmail.com</span>
                   </a>
                   
        
                </li>
              </ul>
      </div>
      <div   className="md:w-[50%] w-full md:h-full">
      <img src={Aboutimage} alt="Aboutimage"  className="hidden md:block  "/>
      <img src={img4} alt="Aboutimage"  className="block md:hidden "/>
      </div>
      </div>
    </section>
  )
}

export default About;
