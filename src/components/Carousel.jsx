import Frame from "../assets/Frame.png";

import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export const Caraousel=()=>{
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return(
    <div className="pb-10">
    <Carousel afterChange={onChange}>
    <div>
      <img src={Frame} />
    </div>
    <div>
      <img src={Frame} />
    </div>
    <div>
      <img src={Frame} />
    </div>
    <div>
      <img src={Frame} />
    </div>
    
  </Carousel>
  </div>
  )
}