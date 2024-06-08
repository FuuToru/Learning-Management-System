import Home from "./Home";
import Header from "./Header";
import Footer from "./footer";
import {Routes, Route} from 'react-router-dom';
import CourseDetail from "./CourseDetail";
import About from "./About";

function Main() {
    return (
      <div className="App">
        <Header/>
        <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/detail/:course_id" element={<CourseDetail/>}/>

        </Routes>
        
        <Footer/>
        
      </div>
    );
  }
  
  export default Main;
  