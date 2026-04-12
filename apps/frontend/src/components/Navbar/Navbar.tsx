import { NavLink } from "react-router";
import "./Navbar.css";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink to="/employees" end>
          Employees
        </NavLink>
        <NavLink to="/organization">Organization</NavLink>
      </div>
      <div className="navbar-auth">
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </nav>
  );
}
