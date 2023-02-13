import React, { useState } from 'react';
// import UseForm from './UseForm';
// import Validate from './Validate';
import './App.css';
import { useNavigate } from "react-router-dom";


function App() {
    const [values, setValues] = useState({
        username: "",
        lastname: "",
        email: "",
        password: "",
        address: "",
        mobilenumber: "",
    });

    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        // console.log(e.target.name , e.target.value);
        const { name, value } = e.target;

        setValues((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });

    };

    const validateForm = () => {
        let err = {}
        let formIsValid = true;

        if (values.username === "") {
            formIsValid = false;
            err.username = "Firstname required"
        }

        if (values.lastname === "") {
            formIsValid = false;
            err.lastname = "lastname required"
        }

        if (values.email === "") {
            err.email = "email required"
        } else {
            let regex = /^\S+@\S+\.\S+$/;
            if (regex.test(values.email) === false) {
                formIsValid = false;
                err.email = "Please enter valid email";
            }
        }

        if (values.password === "") {
            err.password = "password required"
        } else {
            let regex = /^.(?=.{8,})(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%&]).$/;
            if (regex.test(values.password) === false) {
                formIsValid = false;
                err.password = "Please enter strong password(must be 8 characters including 1 uppercase, 1 special character and alphanumeric characters)";
            }
        }

        if (values.address === "") {
            formIsValid = false;
            err.address = "address required"
        }

        if (values.mobilenumber === "") {
            err.mobilenumber = "mobilenumber required"
        } else {
            let regex = /^\d{10}$/;
            if (regex.test(values.mobilenumber) === false) {
                formIsValid = false;
                err.mobilenumber = "Please enter valid number";
            }
        }

        setErrors({ ...err })
        return formIsValid;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm()

    }



  



    return (
        <div className='container'>

            <form className="form" onSubmit={handleSubmit} >
                <div className="form-control">
                    <label>Firstname</label>
                    <input type="text" name="username" placeholder="Enter your firstname" onChange={handleChange} value={values.username} /> <div className='art'>{errors.username}</div>
                </div>
                <div className="form-control">
                    <label>Lastname</label>
                    <input type="text" name="lastname" placeholder="Enter your lastname" onChange={handleChange} value={values.lastname} /> <div className='art'>{errors.lastname}</div>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Enter your email" onChange={handleChange} value={values.email} /><div className='art'>{errors.email}</div>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="text" name="password" placeholder="Enter your password" onChange={handleChange} value={values.password} /><div className='art'>{errors.password}</div>
                </div>
                <div className="form-control">
                    <label>Address</label>
                    <input type="text" name="address" placeholder="Enter your Address" onChange={handleChange} value={values.address} /><div className='art'>{errors.address}</div>
                </div>
                <div className="form-control">
                    <label>Mobile Number</label>
                    <input type="tel" name="mobilenumber" placeholder="Enter your mobilenumber" onChange={handleChange} value={values.mobilenumber} /><div className='art'>{errors.mobilenumber}</div>
                </div>
                <div className="form-control">
                    <input type="submit" className='memo' />
                </div>



                {/* <div className="form-control">
          <label>Lastname</label>
          <input type="text" name="lastname" placeholder="Enter your lastname" onChange={()=>navigate()}  /> <div className='art'>{errors.lastname}</div>
        </div> */}
            </form>
        </div>
    )

}


export default App;