import { Button } from "@/components/ui/button"
import './App.css'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


import { useNavigate } from 'react-router-dom';

function App() 
{
    const navigate = useNavigate();
    return (
      <>
        <div className="navBar">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>  
          </NavigationMenu>
        </div>
        <div className="frontPage">
            <Button onClick={() => navigate('/NewPage')}>Click me!</Button>
        </div>
      </>
    )
}

export default App
