import Home from "./Home";
import Header from "./Header";
import Footer from "./footer";
import {Routes, Route} from 'react-router-dom';

function Main() {
    return (
      <div className="App">
        <Header/>
        <Routes >
          <Route path="/" element={<Home/>}/>
        </Routes>
        
        <Footer/>
        
      </div>
    );
  }
  
  export default Main;
  