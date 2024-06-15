import Home from "./Home";
import Header from "./Header";
import Footer from "./footer";
import {Routes, Route} from 'react-router-dom';
import CourseDetail from "./CourseDetail";
import About from "./About";
import TeacherDetail from "./TeacherDetail";

//User
import Login from "./User/Login";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";
import MyCourses from "./User/MyCourses";
import FavoriteCourses from "./User/FavoriteCourses";
import RecommendedCourses from "./User/RecommendedCourses";
import ProfileSetting from "./User/ProfileSetting";
import ChangePassword from "./User/ChangePassword";

// Teacher
import TeacherDashboard from "./Teacher/TeacherDashboard";
import TeacherChangePassword from "./Teacher/TeacherChangePassword";
import TeacherLogin from "./Teacher/TeacherLogin";
import TeacherRegister from "./Teacher/TeacherRegister";
import TeacherCourses from "./Teacher/TeacherCourses";
import TeacherProfileSetting from "./Teacher/TeacherProfileSetting";
import AddCourse from "./Teacher/AddCourse";
import UserList from "./Teacher/UserList";


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
          <Route path="/my-courses" element={<MyCourses/>}/>
          <Route path="/favorite-courses" element={<FavoriteCourses/>}/>
          <Route path="/recommended-courses" element={<RecommendedCourses/>}/>
          <Route path="/profile-setting" element={<ProfileSetting/>}/>
          <Route path="/change-password" element={<ChangePassword/>}/>
          <Route path="/teacher-login" element={<TeacherLogin/>}/>
          <Route path="/teacher-register" element={<TeacherRegister/>}/>
          <Route path="/teacher-dashboard" element={<TeacherDashboard/>}/>
          <Route path="/teacher-courses" element={<TeacherCourses/>}/>
          <Route path="/add-course" element={<AddCourse/>}/>
          <Route path="/teacher-users" element={<UserList/>}/>
          <Route path="/teacher-profile-setting" element={<TeacherProfileSetting/>}/>
          <Route path="/teacher-change-password" element={<TeacherChangePassword/>}/>
          <Route path="/teacher-detail/:teacher-id" element={<TeacherDetail/>}/>


        </Routes>
        
        <Footer/>
        
      </div>
    );
  }
  
  export default Main;
  