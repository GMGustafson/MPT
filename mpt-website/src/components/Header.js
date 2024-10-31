import "../css/Header.css"; 
import logo from "../MPTimages/logo.jpg";

const Header = () => { 
    return (
        <header class="columns"> 
            <img id="logo1" src={logo} alt="Logo 1"/> 
            <h1> Mackin Pallet & Trucking Inc. </h1>
            <img id="logo2" src={logo} alt="Logo 2"/> 
        </header>
    ); 
};

export default Header; 

