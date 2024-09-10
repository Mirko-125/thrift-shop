import { useNavigate } from 'react-router-dom';

function Navbar()
{
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <div className="links">
                <a onClick={() => navigate('/')}>Home</a>
                <a onClick={() => navigate('/NewPage')}>New Page</a>
            </div>
        </nav>
    )
}

export default Navbar;