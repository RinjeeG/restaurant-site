import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className='navbar-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;