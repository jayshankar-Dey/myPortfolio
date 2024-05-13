/* eslint-disable react/prop-types */
import projectimage from "../assets/images/project.jpeg"
import git from "../assets/images/git.png"
const Card = ({project}) => {
  return (
    <>
      <div className="w-48 h-60 bg-zinc-900 border border-gray-500 rounded-md shadow-md">
<div className="h-fit p-2 w-full">
    {
        project.img?<img src={project.img} alt="" className="object-cover w-full h-24 object-center" />:<img src={projectimage} alt="" className="object-cover object-center w-full h-24" />
    }
    <h3 className={`${project.live?"my-2":"my-0"} font-semibold `}>{project.name}</h3>
    {
        project.live?<a className="px-2  rounded-full text-[14px] bg-red-500" href={project.liveLink}>Golive</a>:null
    }
    <br />
    <a href={project.git} className="flex  gap-x-2 my-2 text-[15px] font-semibold">
        <img src={git} alt=""  className="h-5"/>
        {project.name}
        </a>
        <a href={project.git} className="px-2 bg-blue-700 text-[14px] rounded-md ">Downlood</a>
</div>
</div>
    </>
  )
}

export default Card
