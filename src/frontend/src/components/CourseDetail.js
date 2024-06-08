import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CourseDetail(){
    let {course_id} = useParams();
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img className="img-thumbnail" src="/logo512.png" alt="Course Image"></img>
                </div>
                <div className="col-8 text-start">
                    <h3>Course Title</h3>
                    <p>Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way.</p>
                    <p className="fw-bold">Course By: <a href="#">Teacher 1</a></p>
                    <p className="fw-bold">Duration: 3 Hours 30 Minutes</p>
                    <p className="fw-bold">Total Enroll: 456 Students</p>
                    <p className="fw-bold">Rating: 4.5/5</p>

                </div>
            </div>
            <div className="card mt-4 text-start">
                <div className="card-header">
                    Course Videos
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Introduction <button className="btn btn-sm btn-danger float-end"><i className="bi-youtube"></i></button>
                    </li>
                    <li className="list-group-item">
                        Introduction <button className="btn btn-sm btn-danger float-end"><i className="bi-youtube"></i></button>
                    </li>
                    <li className="list-group-item">
                        Introduction <button className="btn btn-sm btn-danger float-end"><i className="bi-youtube"></i></button>
                    </li>
                    <li className="list-group-item">
                        Introduction <button className="btn btn-sm btn-danger float-end"><i className="bi-youtube"></i></button>
                    </li>
                </ul>
            </div>
            <h3 className="pb-1 mb-4 mt-5">Related Course<a href="#" className="float-end">See all</a></h3>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/logo512.png" className="card-img-top"></img></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/logo512.png" className="card-img-top"></img></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                        </div>
                    </div>
                    </div>
            </div>

        </div>

    )
}
export default CourseDetail;