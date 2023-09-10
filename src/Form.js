import React, { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

// const arrprod = ["hello","Good to see you","Bye"]
function Form() {
  const {register,handleSubmit,formState:{errors}} = useForm();
  // const [fname, SetFName] = useState("");
  // const [pass, SetPass] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   SetFName(e.target.fullname.value);
  //   SetPass(e.target.password.value);

  // };
  const styles={
    textAlign:"center"
  }
  return (
    <div className='container'>
      
      <div className='app-wrapper'>
      <h1 style={styles}>Login</h1>
        <form onSubmit={handleSubmit((data)=>{
            
            console.log(data);
        })}>
          
          <input {...register('fullname',{ required:"Name is required"})} type='text'  /><br />
          {errors?.fullname && <p>{errors.fullname.message}</p>}

          <input {...register('password',{ required:"Password is required",minLength:{
            value:5,
            message:"Minimun 4 char needed."
          }})} type='password'  />
          {errors?.password && <p>{errors.password.message}</p>}<br />

          <input type="submit" />
        </form>
        
      </div>
    </div>
  );
}
export default Form;
