import {Outlet, Link} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/Layout.css"; 

const Layout = () => 
{
    return (
        <>
            <Header/>
            <nav id = "main-nav">
                <li> <Link to="/"> Home </Link></li>
                <li><Link to="/AboutUs"> About us </Link></li>
                <li><Link to="/ContactUs"> Contact Us </Link></li>
                <li><Link to="/Gallery"> Gallery </Link></li>
                <li><Link to="/Products"> Products </Link></li>
                <li><Link to="/Reviews"> Reviews </Link></li>
            </nav>
            <Outlet/>
           <Footer/>
        </>
    );
};
    
export default Layout; 