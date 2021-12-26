import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../src/assets/sass/style.css'
import Navbar from './components/Header/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import Section1 from './components/Header/section1';
import Section2 from './components/Header/section2';
import Footer from './components/Header/footer';
import FooterBottom from './components/Header/footerBottom';



class App extends Component{
  render(){
    return(
      <div className='general-contain'>
        <div className="header">
          <div className="container">
            <Navbar />
            
          </div>
        </div>
        <div className="section-1">
          <Section1 />
        </div>
        <div className="section-2">
          <Section2 />
        </div>
        <div className="footer">
          <Footer />
        </div>
        <div className="footer-bottom">
          <FooterBottom />
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />,document.querySelector("#root"))