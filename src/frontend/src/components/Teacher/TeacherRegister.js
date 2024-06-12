import { Link } from "react-router-dom";

function TeacherRegister(){
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Teacher Register</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="staticEmail" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="staticEmail"></input>
                                </div>
                                <div className="mb-3">
                                    <label for="staticEmail" className="form-label">Email</label>
                                    <input type="text" className="form-control" id="staticEmail"></input>
                                </div>
                                <div className="mb-3">
                                    <label for="inputPassword" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword"></input>
                                </div>
                                    <button className="btn btn-primary">Register</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TeacherRegister