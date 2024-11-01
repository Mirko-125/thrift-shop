import React from 'react';
import XButton from '../../../public/x.svg';

const SlidingWindow = ({ isVisible, onClose, motive }) => {
    // motive will be linked to the component that renders the correct inside content
    return (
      <div className={`sliding-window ${isVisible ? 'visible' : ''}`}>
        <button onClick={onClose}>
          <img className="xButtonExit" src={XButton} alt="X" />
        </button>
        {/* Slider content */}
      </div>
    );
  };
  
  export default SlidingWindow;