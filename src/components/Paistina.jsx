import React from "react";
import video from '../video.mp4';
function Paistina () {
    return ( 
        <div>
            <video src={video} autoPlay loop muted/>
        </div>
     );
}

export default Paistina ;