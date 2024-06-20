import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';


function TeacherLogin(){
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [teacherLoginData, setteacherLoginData] = useState({
        email: '',
        password: '',
    });
    const handleChange = (event)=>{
        setteacherLoginData({
            ...teacherLoginData,
            [event.target.name]: event.target.value
        });
    }

    const submitForm = ()=>{
        console.log(teacherLoginData)

    }
    return (
        <div className="container mt-4 text-start">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Teacher Login</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="staticEmail" className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" value={teacherLoginData.email} onChange={handleChange}></input>
                                </div>
                                <div className="mb-3">
                                    <label for="inputPassword" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" value={teacherLoginData.password} onChange={handleChange}></input>
                                </div>
                                    <button type="submit" onClick={submitForm} className="btn btn-primary">Login</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TeacherLogin;