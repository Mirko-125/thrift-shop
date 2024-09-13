import { useNavigate } from 'react-router-dom';

import logoSvg from '../../../public/vite.svg';

function Navbar()
{
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <a onClick={() => navigate('/')} className="clickable-link">
                <img src={logoSvg} alt="LOGO"/>
            </a>
            <ul className="navigation-links">
                <li className="link"><a onClick={() => navigate('/')} className="clickable-link">New arrivals</a></li>
                <li className="link"><a onClick={() => navigate('/NewPage')} className="clickable-link">Clothing</a></li>
                <li className="link"><a onClick={() => navigate('/')} className="clickable-link">Accesories</a></li>
            </ul>
            <ul className="user-links">
                <li className="link"><a onClick={() => navigate('/')} className="clickable-link">Search</a></li>
                <li className="link"><a onClick={() => navigate('/')} className="clickable-link">Sign in</a></li>
                <li className="link"><a onClick={() => navigate('/')} className="clickable-link">Favorites</a></li>
                <li className="link"><a onClick={() => navigate('/')} className="clickable-link">Bag</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;