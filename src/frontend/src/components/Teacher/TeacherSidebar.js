import { Link } from "react-router-dom";

function TeacherSidebar(){
    return(
        <div className="card">
        <h5 className="card-header">Dashboard</h5>
        <div className="list-group list-group-flush">
            <Link to="/teacher-courses" className="list-group-item list-group-item-action">Teacher Course</Link>
            <Link to="/add-course" className="list-group-item list-group-item-action">Add Courses</Link>
            <Link to="/teacher-users" className="list-group-item list-group-item-action">Users List</Link>
            <Link to="/teacher-profile-setting" className="list-group-item list-group-item-action">Profile Setting</Link>
            <Link to="/teacher-change-password" className="list-group-item list-group-item-action">Change Password</Link>
            <Link to="/logout" className="list-group-item list-group-item-action text-danger">Logout</Link>
        </div>
    </div>
    )
}
export default TeacherSidebar;