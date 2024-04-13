import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import duffle from "../assets/dufflebag.png";


export const Trying=()=>{
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
    <div className="bg-slate-300 h-screen flex justify-center" >
      <div className=" flex flex-col justify-center rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <Card hoverable style={{
                width: 190,
            }} cover={<img alt="example" src={duffle} />}>
            <Meta title="Gucci Duffle bag" />
            </Card>
        
      </div>
    </div>
  </div>
    )
}
<div className='bg-slate-300 h-screen flex justify-center'>

</div>