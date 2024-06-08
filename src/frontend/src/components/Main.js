import Home from "./Home";
import Header from "./Header";
import Footer from "./footer";
import {Routes, Route} from 'react-router-dom';
import CourseDetail from "./CourseDetail";
import About from "./About";
import Login from "./User/Login";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";

function Main() {
    return (
      <div className="App">
        <Header/>
        <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/detail/:course_id" element={<CourseDetail/>}/>
          <Route path="/user-login" element={<Login/>}/>
          <Route path="/user-register" element={<Register/>}/>
          <Route path="/user-dashboard" element={<Dashboard/>}/>

        </Routes>
        
        <Footer/>
        
      </div>
    );
  }
  
  export default Main;
  