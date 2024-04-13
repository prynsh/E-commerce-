
// import { Card } from 'antd';
// const { Meta } = Card;
    // import duffle from "../assets/dufflebag.png";
    // import speaker from "../assets/speaker.png";
    // import jacket from "../assets/jacket.png";
    // import console from "../assets/console.png";
// import { AddtoCartButton } from './AddToCartButton';

// export const Carrd=()=>{
//     return(
//         <div>
//         <div className='flex justify-between px-28'>
//             <div>
//             <Card hoverable style={{
//                 width: 250,
//             }} cover={<img alt="example" src={duffle} />}>
//             <Meta className="pt-14" title="Gucci Duffle bag" />
//             </Card>
//             <AddtoCartButton label={"Add to cart"} />
//             </div>
//             <div>
//             <Card  hoverable style={{
//                 width: 250,
//             }} cover={<img alt="example" src={speaker} />}>
//             <Meta className='pt-1' title="RGB liquid CPU Cooler" />
//             </Card>
//             <AddtoCartButton label={"Add to cart"} />
//             </div>
//             <div>
//             <Card hoverable style={{
//                 width: 250,
//             }} cover={<img alt="example" src={console} />}>
//             <Meta className="pt-7" title="GP11 Shooter USB Gamepad" />
//             </Card>
//             <AddtoCartButton label={"Add to cart"} />
//             </div>
//             <div>
//             <Card hoverable style={{
//                 width: 250,
//             }} cover={<img alt="example" src={jacket} />}>
//             <Meta title="Quilted Satin Jacket" />
//             </Card>
//             <AddtoCartButton label={"Add to cart"} />
//             </div>
            
//         </div>
//         </div>
//     )
// }
import React from 'react';
import { Card } from 'antd';
import { AddtoCartButton } from './AddToCartButton';

const { Meta } = Card;

export const Carrd = ({ items }) => {
  return (
    <div>
      <div className='flex justify-between px-28'>
        {items.map((item, index) => (
          <div key={index}>
            <Card
              hoverable
              style={{
                width: 250,
                height:320,
              }}
              cover={<img alt="example" src={item.image} />}
            >
              <Meta title={item.title} description={item.description} />
            </Card>
            <AddtoCartButton  label={"Add to Cart"}></AddtoCartButton>
          </div>
        ))}
      </div>
    </div>
  );
};
