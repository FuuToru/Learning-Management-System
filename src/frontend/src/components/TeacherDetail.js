import { Link } from "react-router-dom";
function TeacherDetail(){
    return(
        <div className="container mt-3">
        <div className="row">
            <div className="col-4">
                <img className="img-thumbnail" src="/logo512.png" alt="Course Image"></img>
            </div>
            <div className="col-8 text-start">
                <h3>Fuu Toru</h3>
                <p>Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way.</p>
                <p className="fw-bold">Skills: <Link to="/category/ml">ML</Link>, <Link to="/teacher-detail/1">Deep</Link>, <Link to="/teacher-detail/1">AI</Link> </p> 
                <p className="fw-bold">Recent Course: <Link to="/teacher-detail/1">AI</Link></p>
                <p className="fw-bold">Rating: 4.5/5</p>

            </div>
        </div>
        <div className="card mt-4 text-start">
            <div className="card-header">
                Course List
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    Introduction Deep learning <button className="btn btn-sm btn-danger float-end"><i className="bi-youtube"></i></button>
                </li>
                <li className="list-group-item">
                    How to learn good AI <button className="btn btn-sm btn-danger float-end"><i className="bi-youtube"></i></button>
                </li>
                <li className="list-group-item">
                    Something you need understand to learn Machine learning <button className="btn btn-sm btn-danger float-end"><i className="bi-youtube"></i></button>
                </li>
                <li className="list-group-item">
                    Introduction ML <button className="btn btn-sm btn-danger float-end"><i className="bi-youtube"></i></button>
                </li>
            </ul>
        </div>
        

    </div>
    )
}
export default TeacherDetail;