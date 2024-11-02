import React, { Suspense, lazy } from 'react';

const ClothingShort = lazy(() => import('./_ClothingShort'));
const AccessoriesShort = lazy(() => import('./_AccessoriesShort'));

const ComponentMap =
{
  "ClothingShort" : ClothingShort,
  "AccessoriesShort" : AccessoriesShort,
}

const NavbarDropdown = ({isVisible, motive}) =>
{

    const ComponentToRender = ComponentMap[motive] || null;

    return (
        <div className={`dropdown-window ${isVisible ? 'visible' : ''}`}> 
          <Suspense fallback={<div>Loading...</div>}>
          {ComponentToRender && <ComponentToRender />}
          </Suspense>
        </div>
      );
    };

export default NavbarDropdown;