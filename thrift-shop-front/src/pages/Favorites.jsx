import React from 'react';

import Navbar from '../components/my-components/Navbar.jsx';
import Restricted from '../components/my-components/Restricted.jsx';
import Footer from '../components/my-components/Footer.jsx';

function Favorites()
{
    const isSignedIn = false;
    return (
        <>
            <Navbar/>
            <br />
            <br />
            {
                isSignedIn ?
                    <div>
                        xoxo
                    </div>
                    :
                    <div className="restriction-content">
                        <Restricted />
                    </div>
            }
            <Footer/>
        </>
    );
}
export default Favorites;