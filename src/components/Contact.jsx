/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"
import Input from "../components/Input"
import {useFormik} from "formik"
import { messageSchema } from "./Yup"
import contactimage from "../assets/images/3d6.png"
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify"
const Contact = () => {
  emailjs.init({
    publicKey: 'your_key',
  });
const initialValues={
  name:"",
  email:"",
  message:""
}
   
  const {values,errors,handleSubmit,handleChange,handleBlur,touched}=useFormik({
    initialValues:initialValues,
    validationSchema:messageSchema,
    onSubmit:(value)=>{
      console.log(value)
      emailjs.send('service_0q6nei', 'template_jnfhh', value).then(
        (response) => {
          toast(response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
     
    }
  })
   
 
  return (
    <section >
       <div className="text-center p-3 ">
        <h1   className="md:text-2xl text-xl">Contact Section</h1>
        <p className="text-[14px] text-gray-400"> dolor sit amet consectetur adipisicing elit. Animi, neque.</p>
    </div>
      <div className="w-full md:p-0 p-3  bg-zinc-900 flex justify-center items-center">

      
      <div className=" h-fit p-3 bg-zinc-900 rounded-md flex   justify-center shadow-md border border-gray-500 md:flex-row-reverse md:w-[870px] mx-5 md:m-0 w-full gap-3 ">
         

         <div className="md:w-[50%] w-full px-2 py-3  flex flex-col justify-center items-center ">
          
          <form onSubmit={handleSubmit} className="flex flex-col w-full ">
             
            <Input lable="Name" type="text" value={values.name}  error={errors.name && touched.name?errors.name:""} name={"name"} onChange={handleChange} onBlur={handleBlur} />


            <Input lable="Email" type="email"  error={errors.email&&touched.email?errors.email:""} name={"email"}  onChange={handleChange} onBlur={handleBlur}  value={values.email} />

            <Input lable="Message" type="text"  error={errors.message && touched.message?errors.message:""} name={"message"} onChange={handleChange} onBlur={handleBlur} value={values.password}  />
           
           

            <button className="mt-4 p-2 bg-blue-500 text-white font-semibold w-32 rounded-md shadow-md mb-3">send</button>

          </form>

         </div>

         <div className="md:w-[50%] md:block hidden ">
          <img src={contactimage} alt="" />
         </div>
        
      </div>
      </div>
    </section>
  )
}

export default Contact
