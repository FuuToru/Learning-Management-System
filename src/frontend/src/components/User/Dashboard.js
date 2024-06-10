import { Link } from "react-router-dom";
import MyCourses from "./MyCourses";
import Sidebar from "./Sidebar";
function Dashboard(){
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3 text-start">
                    <Sidebar/>


                </aside>
                <section className="col-md-9 text-start">
                    Dashboard
                  
                </section>
            </div>
        </div>
    )
}

export default Dashboard