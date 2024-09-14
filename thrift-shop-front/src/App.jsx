import Navbar from "@/components/my-components/Navbar"

import { useNavigate } from 'react-router-dom';

function App() 
{
    const navigate = useNavigate();
    return (
      <>
        <Navbar/>
        <div className="main-page-content">
          <div className="new-collection">
            <a onClick={() => navigate('/new')} className="main-page">
              <div className="main-image-background">
              <img src="http://localhost:8888/background_inspo.jpg" alt="pic">
              </img>
              </div>
              <div className="title-menu">
                <h2>
                  NEW COLLECTION
                </h2>
                <p className="clickable-link">
                  view
                </p>
              </div>
            </a>
          </div>
          <div className="two-categories">
            X
          </div>
        </div>
      </>
    )
}

export default App
