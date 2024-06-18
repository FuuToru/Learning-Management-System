import Header from "./Header";
import logo from "../logo.svg";
import CourseDetail from "./CourseDetail";
import { Link } from "react-router-dom";
import AllCourses from "./AllCourses";
import {useEffect} from "react";
function Home() {
  useEffect(() =>{
    document.title="Home";
  });
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
            </div>
            <div className="card-footer text-start">
              <div className="title">
                <span >Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>


        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Course Title</Link></h5>
              <p className="card-text">Course Description</p>
            </div>
            <div className="card-footer text-start">
              <div className="title">
                <span >Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>


        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Course Title</Link></h5>
              <p className="card-text">Course Description</p>
            </div>
            <div className="card-footer text-start">
              <div className="title">
                <span >Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>


        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Course Title</Link></h5>
              <p className="card-text">Course Description</p>
            </div>
            <div className="card-footer text-start">
              <div className="title">
                <span >Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>


        </div>

      </div>
      <h3 className="pb-1 mt-4 mb-4 text-start ">Popular Courses <Link to="/popular-courses" className='float-end btn btn-sm btn-dark m-2'>View All Categories<i className="fa-solid fa-arrow-right"></i></Link></h3>
      <div className="row">
      <div className="col-md-3">
          <div className="card">
            <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Course Title</Link></h5>
              <p className="card-text">Course Description</p>
            </div>
            <div className="card-footer text-start">
              <div className="title">
                <span >Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>


        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Course Title</Link></h5>
              <p className="card-text">Course Description</p>
            </div>
            <div className="card-footer text-start">
              <div className="title">
                <span >Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>


        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Course Title</Link></h5>
              <p className="card-text">Course Description</p>
            </div>
            <div className="card-footer text-start">
              <div className="title">
                <span >Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>


        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Course Title</Link></h5>
              <p className="card-text">Course Description</p>
            </div>
            <div className="card-footer text-start">
              <div className="title">
                <span >Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>


        </div>

      </div>
      <h3 className="mb-4 mt-4 text-start ">Popular Teachers <Link to="/popular-teachers" className='float-end btn btn-sm btn-dark m-2'>View All Teacher<i className="fa-solid fa-arrow-right"></i></Link></h3>
      <div className="row">
      <div className="col-md-3">
          <div className="card">
            <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Teacher Name</Link></h5>
              <p className="card-text">Teacher Description</p>
            </div>
            <div className="card-footer text-start">
              <div className="title">
                <span >Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Teacher Name</Link></h5>
              <p className="card-text">Teacher Description</p>
            </div>
            <div className="card-footer text-start">
              <div className="title">
                <span >Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>


        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Teacher Name</Link></h5>
              <p className="card-text">Teacher Description</p>
            </div>
            <div className="card-footer text-start">
              <div className="title">
                <span >Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>


        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src={logo} className="card-img-top" alt="..." ></img></a>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Teacher Name</Link></h5>
              <p className="card-text">Teacher Description</p>
            </div>
            <div className="card-footer text-start">
              <div className="title">
                <span >Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>


        </div>

      </div>



    </div>
  );
}

export default Home;
