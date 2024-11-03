import logoSvg from '/punk.png';

function Footer()
{
    return (
        <>
            <footer className="footer">
                <div className="footer-sections">
                    <div className="section">
                        <h2 className="section">
                            Legal and Cookies
                        </h2>
                            <a href="" className="links">
                                This is a learning project
                            </a>
                            <a href="">
                                Cookies and actual backend soon
                            </a>
                            <a href="">
                                It will be deployed in far future
                            </a>
                    </div>
                    <div className="section">
                        <h2 className="section">
                            Assistance
                        </h2>
                            <a href="" className="links">
                                Call Mirko
                            </a>
                            <a href="">
                                Call Djordje
                            </a>
                    </div>
                    <div className="section">
                        <h2 className="section">
                            Company
                        </h2>
                            <a href="" className="links">
                                Reservoir files inc.
                            </a>
                    </div>
                    <div className="section">
                        <h2 className="section">
                            Follow
                        </h2>
                            <a href="https://mirko-125.github.io/" className="links">
                                https://mirko-125.github.io/
                            </a>
                            <a href="https://github.com/Mirko-125">
                                https://github.com/Mirko-125
                            </a>
                            <a href="https://github.com/1Madd1">
                                https://github.com/1Madd1
                            </a>
                    </div>
                </div>
                <div className="bottom-logo">
                    <img src={logoSvg} alt="LOGO"/>
                    <h1> &gt; All rights reserved </h1>
                </div>
            </footer>
        </>
    )
}

export default Footer;