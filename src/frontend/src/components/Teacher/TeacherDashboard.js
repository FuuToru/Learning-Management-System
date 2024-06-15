import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
function TeacherDashboard(){
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3 text-start">
                    <TeacherSidebar/>


                </aside>
                <section className="col-md-9 text-start">
                   Teacher Dashboard
                  
                </section>
            </div>
        </div>
    )
}

export default TeacherDashboard