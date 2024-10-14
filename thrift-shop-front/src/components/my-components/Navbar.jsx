import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import logoSvg from '/punk.png';

function Navbar({color="black"})
{
    useEffect(() => {
        if(color === "white") {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.style.color = "white";
            }
        }
    }, [color]);

    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar">
                <a onClick={() => navigate('/')} className="clickable-link">
                    <img className="punk-logo-title" src={logoSvg} alt="LOGO"/>
                </a>
                <ul className="navigation-links">
                    <li className="link"><a onClick={() => navigate('/new-arrivals')} className="clickable-link">New arrivals</a></li>
                    <li className="link"><a onClick={() => navigate('/')} className="clickable-link">Clothing</a></li>
                    <li className="link"><a onClick={() => navigate('/')} className="clickable-link">Accesories</a></li>
                </ul>
                <ul className="user-links">
                    <li className="link"><a onClick={() => navigate('/')} className="clickable-link">Search</a></li>
                    <li className="link"><a onClick={() => navigate('/')} className="clickable-link">Sign in</a></li>
                    <li className="link"><a onClick={() => navigate('/')} className="clickable-link">Favorites</a></li>
                    <li className="link"><a onClick={() => navigate('/')} className="clickable-link">Bag</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;