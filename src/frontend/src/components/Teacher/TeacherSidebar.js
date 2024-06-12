import { Link } from "react-router-dom";

function TeacherSidebar(){
    return(
        <div className="card">
        <h5 className="card-header">Dashboard</h5>
        <div className="list-group list-group-flush">
            <Link to="/my-courses" className="list-group-item list-group-item-action">My Course</Link>
            <Link to="/favorite-courses" className="list-group-item list-group-item-action">Favorite Courses</Link>
            <Link to="/recommended-courses" className="list-group-item list-group-item-action">Recommended Courses</Link>
            <Link to="/profile-setting" className="list-group-item list-group-item-action">Profile Setting</Link>
            <Link to="/change-password" className="list-group-item list-group-item-action">Change Password</Link>
            <Link to="/logout" className="list-group-item list-group-item-action text-danger">Logout</Link>
        </div>
    </div>
    )
}
export default TeacherSidebar;