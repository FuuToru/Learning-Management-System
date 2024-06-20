import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TeacherLogin() {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value,
        });
    };

    const submitForm = async (event) => {
        event.preventDefault(); // Prevent the default form submission
        const formData = new FormData();
        formData.append('email', loginData.email);
        formData.append('password', loginData.password);

        try {
            const response = await axios.post(`${baseUrl}/teacher-login`, formData);
            if (response.data.bool) {
                localStorage.setItem('teacherLoginStatus', 'true');
                navigate('/teacher-dashboard');
            } else {
                console.log('Login failed');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus');
    useEffect(() => {
        if (teacherLoginStatus === 'true') {
            navigate('/teacher-dashboard');
        }
    }, [teacherLoginStatus, navigate]);

    return (
        <div className="container mt-4 text-start">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Teacher Login</h5>
                        <div className="card-body">
                            <form onSubmit={submitForm}>
                                <div className="mb-3">
                                    <label htmlFor="staticEmail" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={loginData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputPassword" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={loginData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherLogin;
