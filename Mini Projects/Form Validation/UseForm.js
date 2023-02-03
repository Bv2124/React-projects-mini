
import{ Button, Form } from 'semantic-ui-react';
import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const Eye = <FontAwesomeIcon className="icon" icon={faEye} />;
const EyeSlash = <FontAwesomeIcon className="icon" icon ={faEyeSlash}/>;
export default function Forme(){
  const { register, handleSubmit, formState: { errors } } = useForm();
  let onSubmit = (data)=>{
    data = Object.values(data)
    data = data.map((item)=>console.log(item))
  }
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState(" ");
  const handlePasswordChange =(e)=>{
      setPasswordInput(e.target.value)
      setPasswordInput(passwordInput);
  }
  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }
  return (
    <div className="Form_container">
      <div className="Welcome"> <p >"Fill out the details below!"</p></div>
      <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
            <label>First name:- </label>
            <input
            className="col-4"
            type="text"
            placeholder="Enter your first name"
            {...register("FirstName", { required: true, maxLength: 25, pattern:/(^[A-Za-z][A-Za-z0-9_]{2,50}$)/})}/>
                        {errors.FirstName && <p style={{color:"red"}}>Please check the First Name</p>}
            </Form.Field>
          <Form.Field>
          <label>Last name:-</label>
          <input
            className="col-4"
            type="text"
            placeholder="Enter your last name"
            {...register("Lastname",{required:true,pattern:/(^[A-Za-z][A-Za-z0-9_]{2,50}$)/})}
          />
          {errors.Lastname && <p style={{color:"red"}}>Please check the Last Name</p>}
          </Form.Field>
          <Form.Field>
          <label>Age:-
          <input
            className="col-2"
            type="text"
            placeholder="Enter your Age"
            {...register("Age",{required:true,maxLength:3,pattern:/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/})}
          />
          </label>
          </Form.Field>
          {errors.Age && <p style={{color:"red"}}>Please enter your correct age</p>}
          <Form.Field>
          <label>E-mail:-
          <input
            className="col-5"
            type="text"
            placeholder="Enter your E-mail"
            {...register("Email",{required:true,minLength:5,pattern:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/})}
          />
          </label>
          </Form.Field>
          {errors.Email && <p style={{color:"red"}}>Enter correct email</p>}
          <Form.Field>
            <span className='Gender'>
            <label>Gender:-</label>
          <select
            className="form-control"
            name='gender'>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='others'>Others</option>
            <option value='pns'>Prefer Not to say !</option>
          </select>
            </span>
          </Form.Field>
          <Form.Field>
            <div className='eye'>
            <label>Password:- </label>
            <input
            className="col-3"
            type={passwordType} 
            onChange={handlePasswordChange}
            name="password"
            placeholder="Enter password"
            {...register("Password", { required: true, pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/})}/>
             <span className="input-group-btn">
                     <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <i>{EyeSlash}</i> :(<i>{Eye}</i>) }</button>
                    </span>
            </div>
            </Form.Field>
            {errors.Password && <p style={{color:"red"}}>Please check the password</p>}
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};


