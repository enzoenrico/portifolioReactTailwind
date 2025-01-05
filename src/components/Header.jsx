import { Link } from "react-scroll"

function Header() {
    <div className="w-100 flex flex-row items-center">
        <Link to="projects" spy={true} smooth={true} offset={-25} duration={500}>Projects</Link>
        <Link to="projects" spy={true} smooth={true} offset={-25} duration={500}>Projects</Link>
    </div>
}

export default Header