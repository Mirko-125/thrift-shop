import Navbar from "@/components/my-components/Navbar"

import { Button } from "@/components/ui/button"

import { useNavigate } from 'react-router-dom';

function App() 
{
    const navigate = useNavigate();
    return (
      <>
        <Navbar/>
        <div className="frontPage">
            <Button onClick={() => navigate('/NewPage')}>Click me!</Button>
        </div>
      </>
    )
}

export default App
