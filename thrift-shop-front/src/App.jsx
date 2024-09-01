import { Button } from "@/components/ui/button"
import './App.css'

import { useNavigate } from 'react-router-dom';

function App() 
{
    const navigate = useNavigate();
    return (
      <>
        <Button onClick={() => navigate('/NewPage')}>Click me!</Button>
      </>
    )
}

export default App
