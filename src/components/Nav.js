import React from 'react';
import '../App.css';
import  { Link } from 'react-router-dom';
import y from './../assets/y.png'

function Nav() {
    const navstyle={
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        minHeight: "20px",
        backgroundColor: "#00000",
        color: "#021859",
        textDecoration: "none",
        fontSize: "20px",
      }
      
      const navlinks ={
        width: "40%",
        padding: "12px",
        display: "flex",
        justifyContent: "in-line",
        alignItems: "center",
        color: "#021859",
        listStyle: "none",
        textDecoration: "none",
      }
    
  return (
    <nav style={navstyle}>
        <img src={y} alt="Logo" className="logoImage" style={{width: 70, padding: 10}}/>
        <ul className="nav-links">
            <Link to="/home" style={navlinks}>
                <li>Organization</li>
            </Link>
            <Link to="/searchForRepos" style={navlinks}>
                <li>Repos</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
