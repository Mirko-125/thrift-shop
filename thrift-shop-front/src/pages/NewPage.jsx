import { Button } from "@/components/ui/button"
import '../App.css'

import { useNavigate } from 'react-router-dom';

function NewPage() 
{
    const navigate = useNavigate();
    return (
        <>
            <Button onClick={() => console.log("check for logs...")}>Check console after clicking me</Button>
            <Button onClick={() => navigate('/')}>Return back</Button>
        </>
    )
}

export default NewPage
