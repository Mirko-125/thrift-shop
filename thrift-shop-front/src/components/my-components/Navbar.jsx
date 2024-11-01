import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import logoSvg from '/punk.png';
import SlidingWindow from './SlidingWindow';
import NavbarDropdown from './NavbarDropdown';

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

    const handleDrop = () =>
    {
        if (isSlidingWindowVisible) 
        {
            toggleSlidingWindow();
        }
        toggleDropdownVindow();
    }

    const handleClickExceptions = () =>
    {
        if (isDropdownWindowVisible)
        {
            toggleDropdownVindow();
        }
        navigate('/new-arrivals');
    }

    const [isSlidingWindowVisible, setSlidingWindowVisible] = useState(false);
    const [slidingWindowContent, setSlidingWindowContent] = useState('');
    const [isDropdownWindowVisible, setDropdownWindowVisible] = useState(false);
    const [dropdownWindowContent, setDropdownWindowContent] = useState('');

    const navigate = useNavigate();

    const toggleSlidingWindow = (content = '') => {
        setSlidingWindowContent(content);
        setSlidingWindowVisible(!isSlidingWindowVisible);
      };

    const toggleDropdownVindow = (content = '') =>
    {
        setDropdownWindowContent(content);
        setDropdownWindowVisible(!isDropdownWindowVisible);
    }

    return (
        <>
            <nav className="navbar">
                <a onClick={() => navigate('/')} className="clickable-link">
                    <img className="punk-logo-title" src={logoSvg} alt="LOGO"/>
                </a>
                <ul className="navigation-links">
                    <li className="link" ><a onClick={handleClickExceptions} className="clickable-link">New arrivals</a></li>
                    <li className="link"><a onClick={handleDrop} className="clickable-link">Clothing</a></li>
                    <li className="link"><a onClick={handleDrop} className="clickable-link">Accesories</a></li>
                </ul>
                <ul className="user-links">
                    <li className="link"><a onClick={toggleSlidingWindow} className="clickable-link">Search</a></li>
                    <li className="link"><a onClick={toggleSlidingWindow} className="clickable-link">Sign in</a></li>
                    <li className="link"><a onClick={() => navigate('/')} className="clickable-link">Favorites</a></li>
                    <li className="link"><a onClick={() => navigate('/')} className="clickable-link">Bag</a></li>
                </ul>
            </nav>
            {isSlidingWindowVisible && <div className="fade-overlay"></div>}
            <SlidingWindow isVisible={isSlidingWindowVisible} onClose={() => setSlidingWindowVisible(false)} content={slidingWindowContent} />
            <NavbarDropdown isVisible={isDropdownWindowVisible} content={dropdownWindowContent} />
        </>
    )
}

export default Navbar;