import React from 'react';
import { Breadcrumb } from 'antd';

export const Bread=()=>{
    return(
        <div className='px-28'>
            <Breadcrumb
            items={[
            {
                title:<a href="/home">Home</a>  ,
            },
            {
                title: <a href="/cart">Cart</a>,
            },
            {
                title: <a href="/checkout">CheckOut</a>,
            },
            ]} />
        </div>
    )
}


