import { Link } from "react-router-dom";
import logo from "../logo.svg";

function PopularTeachers() {
    return (
        <div className="container mt-3">
      <h3 className="pb-1 mt-4 mb-4 text-start ">Popular Teacher <Link to="/popular-courses" className='float-end btn btn-sm btn-dark m-2'>View All Categories<i className="fa-solid fa-arrow-right"></i></Link></h3>
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
export default PopularTeachers