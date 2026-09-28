import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";

const Nav = () => {
  return (
  <Navbar fluid rounded className="!bg-[#F5F9FF]">
      <span className="self-center whitespace-nowrap text-xl font-semibold text-red-600">Mina Esmat</span>
      
      <NavbarToggle />
      <NavbarCollapse>
        < NavbarLink className="[&:hover]:!text-red-600 underline underline-offset-4" as={Link} to="/home">Home</NavbarLink>
        <NavbarLink className="[&:hover]:!text-red-600 underline underline-offset-4" as={Link} to="/skills">skills</NavbarLink>
        <NavbarLink className="[&:hover]:!text-red-600 underline underline-offset-4" as={Link} to="/projects">projects</NavbarLink>
        <NavbarLink className="[&:hover]:!text-red-600 underline underline-offset-4" as={Link} to="/contact">contact</NavbarLink>
        <NavbarLink className="[&:hover]:!text-red-600 underline underline-offset-4" as={Link} to="/AdminDashboard">
          <span className="flex items-center gap-1">
            <FaLock size={12} />
            AdminDashboard
          </span>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Nav