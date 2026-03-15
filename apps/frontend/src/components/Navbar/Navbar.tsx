import { NavLink } from "react-router";
import './Navbar.css'

export function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-links">
                <NavLink to="/employees" end>
                    Employees
                </NavLink>
                <NavLink to="/organization">
                    Organization
                </NavLink>
            </div>
        </nav>
    );
}