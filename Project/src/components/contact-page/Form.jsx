import React,{ useState } from "react";
import Swal from 'sweetalert2';

const inputStyles = `focus border border-gray-100 px-4 py-2`;

function Form() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [clas,setClas]=useState("");
  const [description,setDescription]=useState("");


  const collectData =async(e) =>{
    e.preventDefault();
    let result =await fetch('http://localhost:4000/',{
      method:'post',
      body:JSON.stringify({name,email,clas,description}),
      headers:{
        'Content-Type':'application/json'
      },
    });
    result = await result.json;
    console.log(JSON.stringify(result))
    localStorage.setItem("contact",JSON.stringify(result));
  }
  const handleClick = () =>{
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Successfully Submited",
      showConfirmButton: false,
      timer: 1500
    });
   }

  return (
    <form className="bg-gray-50 px-5 py-8" onSubmit={collectData}>
      <h4 className="relative mb-4 mt-6 pb-2 text-2xl font-bold capitalize before:absolute before:bottom-0 before:h-1 before:w-16 before:bg-yellow-500">
        Leave Us Your Info
      </h4>
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="Full Name*" className={inputStyles} 
        value={name}
        onChange={(e)=>setName(e.target.value)}/>
        <input
          type="text"
          placeholder="E-mail Address*"
          className={inputStyles}
          value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <select className={inputStyles} value={clas}
        onChange={(e)=>setClas(e.target.value)}>
          <option value="" disabled>
            Select Class
          </option>
          <option value="body building">Body Building</option>
          <option value="cycling">Cycling</option>
          <option value="meditation">Meditation</option>
          <option value="workout">Workout</option>
          <option value="karate">Karate</option>
          
        </select>
        <textarea
          placeholder="Comment"
          className={`${inputStyles} h-32 max-h-44`}
          value={description}
        onChange={(e)=>setDescription(e.target.value)}
        />
        <button onClick={handleClick} className="self-center bg-yellow-500 px-8 py-4 font-semibold uppercase text-white">
          Submit now
        </button>
      </div>
    </form>
  );
}

export default Form;
