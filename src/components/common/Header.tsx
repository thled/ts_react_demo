import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? 'orange' : 'black'
  });

  return (
    <nav>
      <NavLink style={activeStyle} to="/">Home</NavLink> {" | "}
      <NavLink style={activeStyle} to="/courses">Courses</NavLink> {" | "}
      <NavLink style={activeStyle} to="/about">About</NavLink>
    </nav>
  );
}

export default Header;
