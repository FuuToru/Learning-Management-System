import { Link } from "react-router-dom";

function Dashboard(){
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <div className="card">
                        <h5 className="card-header">Dashboard</h5>
                        <div className="list-group list-group-flush">
                            <Link to="/" className="list-group-item list-group-item-action">My Course</Link>
                            <Link to="/" className="list-group-item list-group-item-action">Favorite Courses</Link>
                            <Link to="/" className="list-group-item list-group-item-action">Recommended Courses</Link>
                            <Link to="/" className="list-group-item list-group-item-action">Profile Setting</Link>
                            <Link to="/" className="list-group-item list-group-item-action">Change Password</Link>
                            <Link to="/" className="list-group-item list-group-item-action">Logout</Link>
                        </div>
                    </div>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header"></h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thread>
                                    <tr>
                                        <th>Course Name</th>
                                        <th>Course Price</th>
                                        <th>Course Rating</th>
                                        <th>Course Enrolled</th>
                                        <th>Action</th>
                                    </tr>

                                </thread>
                                <tbody>
                                    <tr>
                                        <td>Course Name</td>
                                        <td>Course Price</td>
                                        <td>Course Rating</td>
                                        <td>Course Enrolled</td>
                                        <td>
                                            <button className="btn btn-primary">View</button>
                                            <button className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Course Name</td>
                                        <td>Course Price</td>
                                        <td>Course Rating</td>
                                        <td>Course Enrolled</td>
                                        <td>
                                            <button className="btn btn-primary">View</button>
                                            <button className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Course Name</td>
                                        <td>Course Price</td>
                                        <td>Course Rating</td>
                                        <td>Course Enrolled</td>
                                        <td>
                                            <button className="btn btn-primary">View</button>
                                            <button className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Course Name</td>
                                        <td>Course Price</td>
                                        <td>Course Rating</td>
                                        <td>Course Enrolled</td>
                                        <td>
                                            <button className="btn btn-primary">View</button>
                                            <button className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard