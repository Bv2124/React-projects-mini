
import{ Button, Form } from 'semantic-ui-react';
import React,{useState,useRef} from 'react';
import { useForm } from "react-hook-form";
export default function Forme(){
  const { register, handleSubmit, formState: { errors } } = useForm();
  let onSubmit = (data)=>{
    console.log(data)
    data.preventDefault()
    setFormdata({
      Firstname:"",
      Lastname:"",
      Age:"",
      Email:"",
      Password:""
    })
    // setshow(false)
  }
  const password = useRef();
  const changetype = ()=>{
    password.current.type="password"
  }
  const [formdata,setFormdata]=useState({
    Firstname:"",
    Lastname:"",
    Age:"",
    Email:"",
    Password:""
  })

  const {Firstname,Lastname,Age,Email,Password,}=formdata
  const change =(e)=>{setFormdata({...formdata,[e.target.name]:e.target.value})}

  return (
    <div className="Form_container">
      <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
            <label>First name:- </label>
            <input
            className="col-4"
            type="text"
            value={Firstname}
            name="Firstname"
            placeholder="Enter your first name"
            onChange={change}
            {...register("FirstName", { required: true, maxLength: 25, pattern:/(^[A-Za-z][A-Za-z0-9_]{4,50}$)/})}/>
            </Form.Field>
            {errors.FirstName && <p style={{color:"red"}}>Please check the First Name</p>}
          <Form.Field>
          <label>Last name:-</label>
          <input
            className="col-4"
            type="text"
            value={Lastname}
            name="Lastname"
            placeholder="Enter your last name"
            {...register("Lastname",{required:true,max:25,pattern:/(^[A-Za-z][A-Za-z0-9_]{4,50}$)/})}
          />
          {errors.Lastname && <p style={{color:"red"}}>Please check the Last Name</p>}
          </Form.Field>
          <Form.Field>
          <label>Age:-
          <input
            className="col-2"
            type="text"
            value={Age}
            name="Age"
            placeholder="Enter your Age"
            {...register("Age",{required:true,maxLength:3,pattern:/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/})}
          />
          </label>
          </Form.Field>
          {errors.Age && <p style={{color:"red"}}>Please enter your correct age</p>}
          <Form.Field>
          <label>E-mail:-
          <input
            className="col-4"
            type="text"
            value={Email}
            name="Email"
            placeholder="Enter your E-mail"
            {...register("Email",{required:true,minLength:5,pattern:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/})}
          />
          </label>
          </Form.Field>
          {errors.Email && <p style={{color:"red"}}>Enter correct email</p>}
          <Form.Field>
          <label className="Gender">Gender:-
          <select
            className="form-control">
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
            <option>Prefer Not to say !</option>
          </select>
          </label>
          </Form.Field>
          <Form.Field>
            <label>Password:- </label>
            <input
            type="text" onClick={changetype} ref={password}
            className="col-4"
            value={Password}
            name="Password"
            placeholder="Enter password"
            {...register("Password", { required: true, pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/})}/>
            </Form.Field>
            {errors.Password && <p style={{color:"red"}}>Please check the password</p>}
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

