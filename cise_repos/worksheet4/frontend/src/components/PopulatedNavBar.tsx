import { IoMdArrowDropdown } from "react-icons/io";
import NavBar from "./nav/NavBar";
import NavDropdown from "./nav/NavDropdown";
import NavItem from "./nav/NavItem";
const PopulatedNavBar = () => {
return (
<NavBar>
ENSE701 Worksheet 4 Assessment 1A
S2 2024 v3 Pg 15 of 32Jim Buchan/Tony Clear/Mark Alexander/Jingchang Chen
<NavItem>SPEED</NavItem>
<NavItem route="/" end>
Home
</NavItem>
<NavItem dropdown route="/articles">
Articles <IoMdArrowDropdown />
<NavDropdown>
<NavItem route="/articles">View articles</NavItem>
<NavItem route="/articles/new">Submit new</NavItem>
</NavDropdown>
</NavItem>
</NavBar>
);
};
export default PopulatedNavBar;