import React from 'react';
import KenyaSVG from './images/kenya.svg'

const KenyaMap = () => {
  return (
    <div>
      <h1>Kenya Map</h1>
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
        {/* Render the SVG */}
        <img src={KenyaSVG} alt="Kenya Map" style={{ width: '100%' }} />
      </div>
    </div>
  );
};

export default KenyaMap;
