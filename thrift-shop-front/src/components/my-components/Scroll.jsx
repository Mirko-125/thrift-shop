import React, { useState, useEffect } from 'react';

function Scroll() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercentage = (winScroll / height) * 100;
      setScrolled(scrolledPercentage);
    };
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar" id="myBar" style={{ width: `${scrolled}%` }} />
    </div>
  );
}

export default Scroll;