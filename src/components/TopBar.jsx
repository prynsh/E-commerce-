
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
export function TopBar(){
    const items = [
        {
          label: <a href="https://www.antgroup.com">English</a>,
          key: '0',
        },
        {
          label: <a href="https://www.aliyun.com">Hindi</a>,
          key: '1',
        },
        {
          type: 'divider',
        },
      ];


    return (
        <div>
        <div className="flex bg-black text-white justify-between px-36 py-5">
            <div className='flex px-28 justify-center'>
            <div className="pr-2">Summer Sale for all Swim Suits And Free Express Delivery - OFF 50%!   </div>
            <div className="underline font-medium">ShopNow</div>  
            </div>
            <div>
            <Dropdown menu={{
                        items,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            English
                            <DownOutlined />
                        </Space>
                        </a>
                    </Dropdown>
            </div>
            
            {/* <div className="flex absolute top-0 right-0 pr-32 justify-right py-5 ">English
            <div className="pl-2 font-semibold h-3"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </div>
            </div> */}

        </div>
        </div>
    )
}