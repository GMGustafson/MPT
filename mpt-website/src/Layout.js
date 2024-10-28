import {Outlet, Link} from "react-router-dom";
import Header from "./components/Header";
const Layout = () => 
{
    return (
        <>
            <Header/>
            
            <Link to="/"> Home </Link>
            <Link to="/AboutUs"> About us </Link>
            <Link to="/ContactUs"> Contact Us </Link>  
            <Link to="/Gallery"> Gallery </Link>
            <Link to="/Products"> Products </Link>  
            <Link to="/Reviews"> Reviews </Link>
            <Outlet/>

            <p> This is my footer </p>
        </>

    );
};
    
export default Layout; 