import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Dropdown, Space, Divider } from 'antd';
export const SideBar=()=>{
    const items = [
        {
          key: '1',
          label: 'Item 1',
        },
        {
          key: '2',
          label: 'Item 2',
        },
        {
          key: '3',
          label: 'Item 3',
        },
      ];
    return (
        <div className='flex'>
                <div className='px-28 font-medium '>
                    <div className='pb-5'>
                        <Dropdown menu={{
                            items,
                            selectable: true,
                            defaultSelectedKeys: ['3'],
                            }}>
                        <Space >
                            Woman's Fashion
                            <RightOutlined className='pl-9' />
                        </Space>
                        </Dropdown>
                    </div>
                    <div className='pb-4'>
                        <Dropdown menu={{
                            items,
                            selectable: true,
                            defaultSelectedKeys: ['3'],
                            }}>
                        <Space>
                            Men's Fashion
                            <RightOutlined className='pl-14' />
                        </Space>
                        </Dropdown>
                    </div>
                    <div className='pb-4'>
                        <a href='www.google.com'>Electronics</a>
                    </div>
                    <div className='pb-4'>
                        <a href='www.google.com'>Home & Lifestyle</a>
                    </div>
                    <div className='pb-4'>
                        <a href='www.google.com'>Medicine</a>
                    </div>
                    <div className='pb-4'>
                        <a href='www.google.com'>Sports & Outdoor</a>
                    </div>
                    <div className='pb-4'>
                        <a href='www.google.com'>Baby's & Toys</a>
                    </div>
                    <div className='pb-4'>
                        <a href='www.google.com'>Groceries & Pets</a>
                    </div>
                    <div className='pb-4'>
                        <a href='www.google.com'>Health & Beauty</a>
                    </div>
                </div>
                <div
                class="inline-block h-[300px] min-h-[1em] w-0.5 self-stretch bg-black-100 dark:bg-black/10">

                </div>
        </div>
    
    )
}