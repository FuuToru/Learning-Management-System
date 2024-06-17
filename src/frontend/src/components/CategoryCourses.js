import { Link } from "react-router-dom";
import logo from "../logo.svg";

function CategoryCourses() {
    return (
        <div className="container mt-3">
            <h3 className="pb-1 mb-4 text-start">Web Development Courses <a to="/categories" className='float-end btn btn-sm btn-dark m-2'>View All Categories<i className="fa-solid fa-arrow-right"></i></a></h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course Title</Link></h5>
                            <p className="card-text">Course Description</p>
                            <a href="#" className="btn btn-primary">Enroll Now</a>
                        </div>
                    </div>


                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
                        <div className="card-body">
                            <h5 className="card-title">Course Title</h5>
                            <p className="card-text">Course Description</p>
                            <a href="#" className="btn btn-primary">Enroll Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
                        <div className="card-body">
                            <h5 className="card-title">Course Title</h5>
                            <p className="card-text">Course Description</p>
                            <a href="#" className="btn btn-primary">Enroll Now</a>
                        </div>
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
                        <div className="card-body">
                            <h5 className="card-title">Course Title</h5>
                            <p className="card-text">Course Description</p>
                            <a href="#" className="btn btn-primary">Enroll Now</a>
                        </div>
                    </div>


                </div>

            </div>
            <div className="mt-5">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            </div>
        </div>
    )
}
export default CategoryCourses