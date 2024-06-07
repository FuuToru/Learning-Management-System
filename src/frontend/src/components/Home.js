import Header from "./Header";
import logo from "../logo.svg";
function Home() {
  return (
    <div className="container mt-4">
      <h3 className="pb-1 mb-4 ">Latest Courses</h3>
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
      <h3 className="pb-1 mt-4 mb-4 ">Popular Courses</h3>
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



    </div>
  );
}

export default Home;
