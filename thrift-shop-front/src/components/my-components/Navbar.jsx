import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import logoSvg from '/punk.png';
import SlidingWindow from './SlidingWindow';
import NavbarDropdown from './NavbarDropdown';

function Navbar({ color = "black" }) {
    const [isMotive, setMotive] = useState(null);
    
    const dropdownWindowRef = useRef(null);
    const slidingWindowRef = useRef(null);

    useEffect(() => {
        if (color === "white") {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.style.color = "white";
            }
        }
    }, [color]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownWindowRef.current && !dropdownWindowRef.current.contains(event.target)) {
                setDropdownWindowVisible(false);
            }
            if (slidingWindowRef.current && !slidingWindowRef.current.contains(event.target)) {
                setSlidingWindowVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleDrop = (motive) => {
        if (isSlidingWindowVisible) {
            toggleSlidingWindow();
        }
        toggleDropdownWindow('', motive);
    };

    const handleClickExceptions = () => {
        if (isDropdownWindowVisible) {
            toggleDropdownWindow();
        }
        navigate('/new-arrivals');
    };

    const [isSlidingWindowVisible, setSlidingWindowVisible] = useState(false);
    const [slidingWindowContent, setSlidingWindowContent] = useState('');
    const [isDropdownWindowVisible, setDropdownWindowVisible] = useState(false);
    const [dropdownWindowContent, setDropdownWindowContent] = useState('');

    const navigate = useNavigate();

    const toggleSlidingWindow = (content = '', motive) => {
        setMotive(motive);
        setSlidingWindowContent(content);
        setSlidingWindowVisible(!isSlidingWindowVisible);
    };

    const toggleDropdownWindow = (content = '', motive) => {
        setMotive(motive);
        setDropdownWindowContent(content);
        setDropdownWindowVisible(!isDropdownWindowVisible);
    };

    return (
        <>
            <nav className="navbar">
                <a onClick={() => navigate('/')} className="clickable-link">
                    <img className="punk-logo-title" src={logoSvg} alt="LOGO" />
                </a>
                <ul className="navigation-links">
                    <li className="link"><a onClick={handleClickExceptions} className="clickable-link">New arrivals</a></li>
                    <li className="link"><a onClick={() => handleDrop("ClothingShort")} className="clickable-link">Clothing</a></li>
                    <li className="link"><a onClick={() => handleDrop("AccessoriesShort")} className="clickable-link">Accessories</a></li>
                </ul>
                <ul className="user-links">
                    <li className="link"><a onClick={() => toggleSlidingWindow("","Search")} className="clickable-link">Search</a></li>
                    <li className="link"><a onClick={() => toggleSlidingWindow("","SignIn")} className="clickable-link">Sign in</a></li>
                    <li className="link"><a onClick={() => navigate('/')} className="clickable-link">Favorites</a></li>
                    <li className="link"><a onClick={() => navigate('/')} className="clickable-link">Bag</a></li>
                </ul>
            </nav>
            {isSlidingWindowVisible && <div className="fade-overlay"></div>}
            <div ref={slidingWindowRef}>
                <SlidingWindow isVisible={isSlidingWindowVisible} onClose={() => setSlidingWindowVisible(false)} content={slidingWindowContent} motive={isMotive}/>
            </div>
            <div ref={dropdownWindowRef}>
                <NavbarDropdown isVisible={isDropdownWindowVisible} content={dropdownWindowContent} motive={isMotive}/>
            </div>
        </>
    );
}

export default Navbar;