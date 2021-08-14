import React from "react";

import Carousel from "re-carousel";

function Slider(props) {
  return (
    <div>
      <Carousel auto>
        <div style={{ backgroundColor: "tomato" }}>Frame 1</div>
        <div style={{ backgroundColor: "orange" }}>Frame 2</div>
        <div style={{ backgroundColor: "orchid" }}>Frame 3</div>
      </Carousel>
    </div>
  );
}

export default Slider;
