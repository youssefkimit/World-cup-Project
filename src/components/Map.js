import React from "react";

function Map(){
    return(
        <div className="map" id="map">
            <iframe src="https://maps.google.com/maps?q=Qatar&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no" style={{width: "100%", height: "700px"}}>
               </iframe>
               <br/><br/>
        </div>
    );
}

export default Map;