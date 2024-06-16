import Header from "./Header";
import logo from "../logo.svg";
import CourseDetail from "./CourseDetail";
import { Link } from "react-router-dom";
import AllCourses from "./AllCourses";
function Home() {
  return (
    <div className="container mt-4">
      <h3 className="pb-1 mb-4 text-start">Latest Courses <a to="/categories" className='float-end btn btn-sm btn-dark m-2'>View All Categories<i className="fa-solid fa-arrow-right"></i></a></h3>
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
      <h3 className="pb-1 mt-4 mb-4 text-start ">Popular Courses <a to="/categories" className='float-end btn btn-sm btn-dark m-2'>View All Categories<i className="fa-solid fa-arrow-right"></i></a></h3>
      <div className="row">
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
      <h3 className="mb-4 mt-4 text-start ">Featured Teachers <a to="/categories" className='float-end btn btn-sm btn-dark m-2'>View All Categories<i className="fa-solid fa-arrow-right"></i></a></h3>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
            <div className="card-body">
              <h5 className="card-title">Teacher Name</h5>
              <p className="card-text">Teacher Description</p>
              <a href="#" className="btn btn-primary">Enroll Now</a>
            </div>
          </div>


        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
            <div className="card-body">
              <h5 className="card-title">Teacher Name</h5>
              <p className="card-text">Teacher Description</p>
              <a href="#" className="btn btn-primary">Enroll Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
            <div className="card-body">
              <h5 className="card-title">Teacher Name</h5>
              <p className="card-text">Teacher Description</p>
              <a href="#" className="btn btn-primary">Enroll Now</a>
            </div>
          </div>

        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
            <div className="card-body">
              <h5 className="card-title">Teacher Name</h5>
              <p className="card-text">Teacher Description</p>
              <a href="#" className="btn btn-primary">Enroll Now</a>
            </div>
          </div>


        </div>

      </div>



    </div>
  );
}

export default Home;
