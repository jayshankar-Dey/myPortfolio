/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Input = ({lable,type,error,value,name,onBlur,onChange}) => {
  return (
    <>
    <div className={`w-full cursor-pointer h-fit mt-3 rounded-md bg-transparent p-1 flex flex-col px-2 ${error&&"border-2 border-red-200"}`}> 
            <span className="text-[14px] font-semibold">{lable}</span>
            <input  type={type} placeholder={lable} name={name} onBlur={onBlur} id="" className="border-none outline-none bg-transparent  font-semibold md:text-[12px] my-1 text-[14px]" onChange={onChange}  value={value}/>
            <span className="text-[13px]   text-red-500">{error}</span>
            </div>
    </>
  )
}

export default Input