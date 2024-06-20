import { useState } from "react";
import axios from "axios";

function TeacherRegister() {
    const baseUrl = "http://127.0.0.1:8000/api/teacher/";
    const [teacherData, setTeacherData] = useState({
        full_name: "",
        email: "",
        password: "",
        qualification: "",
        mobile_no: "",
        skills: "",
        status: "",
    });

    const handleChange = (event) => {
        setTeacherData({
            ...teacherData,
            [event.target.name]: event.target.value,
        });
    };

    const submitForm = (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form
        const teacherFormData = new FormData();
        teacherFormData.append("full_name", teacherData.full_name);
        teacherFormData.append("email", teacherData.email);
        teacherFormData.append("password", teacherData.password);
        teacherFormData.append("qualification", teacherData.qualification);
        teacherFormData.append("mobile_no", teacherData.mobile_no);
        teacherFormData.append("skills", teacherData.skills);

        try {
            axios.post(baseUrl, teacherFormData).then((response) => {
                setTeacherData({
                    full_name: "",
                    email: "",
                    password: "",
                    qualification: "",
                    mobile_no: "",
                    skills: "",
                    status: "success",
                });
            });
        } catch (e) {
            console.log(e);
            setTeacherData({
                ...teacherData,
                status: "error",
            });
        }
    };

    return (
        <div className="container mt-4 text-start">
            <div className="row">
                <div className="col-6 offset-3">
                    {teacherData.status === "success" && <p className="text-success">Thanks for your register</p>}
                    {teacherData.status === "error" && <p className="text-danger">Something went wrong</p>}
                    <div className="card">
                        <h5 className="card-header">Teacher Register</h5>
                        <div className="card-body">
                            <form onSubmit={submitForm}>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Full Name</label>
                                    <input type="text" onChange={handleChange} name="full_name" className="form-control" value={teacherData.full_name} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" onChange={handleChange} name="email" className="form-control" value={teacherData.email} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputPassword" className="form-label">Password</label>
                                    <input type="password" onChange={handleChange} className="form-control" name="password" value={teacherData.password} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="qualification" className="form-label">Qualifications</label>
                                    <input type="text" onChange={handleChange} className="form-control" name="qualification" value={teacherData.qualification} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile_no" className="form-label">Mobile Number</label>
                                    <input type="text" onChange={handleChange} className="form-control" name="mobile_no" value={teacherData.mobile_no} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="skills" className="form-label">Skills</label>
                                    <textarea onChange={handleChange} className="form-control" name="skills" value={teacherData.skills}></textarea>
                                    <div className="form-text">Php, Python, Javascript</div>
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherRegister;
