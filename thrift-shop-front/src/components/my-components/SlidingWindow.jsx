import React, { Suspense, lazy } from 'react';
import XButton from '/x.svg';

const SignInFill = lazy(() => import('./_SignInFill.jsx'));
const SearchFill = lazy(() => import('./_SearchFill.jsx'));

const ComponentMap =
{
    "SignIn": SignInFill,
    "Search": SearchFill,
};

const SlidingWindow = ({ isVisible, onClose, motive }) => {
    
    const ComponentToRender = ComponentMap[motive] || null;

    return (
      <div className={`sliding-window ${isVisible ? 'visible' : ''}`}>
        <button onClick={onClose}>
          <img className="xButtonExit" src={XButton} alt="X" />
        </button>
        <Suspense fallback={<div>Loading...</div>}>
        {ComponentToRender && <ComponentToRender />}
        </Suspense>
      </div>
    );
  };
  
  export default SlidingWindow;