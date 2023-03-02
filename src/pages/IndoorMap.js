import React, { useRef, useEffect, useState } from 'react';
import mapImage from "./image.png"
import "./style.css"
function IndoorMap() {
    const [highlightedRoom, setHighlightedRoom] = useState(null);

    function handleMouseEnter(roomId) {
        setHighlightedRoom(roomId);
    }

    function handleMouseLeave() {
        setHighlightedRoom(null);
    }

    return (
        <div className="IndoorMap">
            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <rect x="100" y="100" width="200" height="200" className={highlightedRoom === 1 ? 'highlighted' : ''} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} />
                <rect x="500" y="100" width="200" height="200" className={highlightedRoom === 2 ? 'highlighted' : ''} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} />
                {/* Add more rooms here */}
            </svg>
        </div>
    );
}

export default IndoorMap;