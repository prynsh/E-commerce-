import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
import { InputBox } from "./InputBox"

export function Header(){
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1677ff',
          }}
        />
      );
      const onSearch = (value, _e, info) => console.log(info?.source, value);
    return (
        <div className="grid grid-col-2 pb-16">
            <div className="flex justify-between px-28 mr-10 pt-14">
                <div className="font-bold text-4xl pt-2"> Exclusive</div>
                        <div className="flex justify-between space-x-16 pt-4">
                            <div className="flex">Home</div>
                            <div>Contact</div>
                            <div>About</div>
                            <div>Sign Up</div>
                        </div>
                                <div className=' pt-3'>
                                     <Search
                                     placeholder="What are you looking for ?"
                                     onSearch={onSearch}
                                     style={{
                                         width: 220,
                                     }}/>
                                </div>
                        </div>
                        <div className="font-medium">
                        <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-400"></hr>
            </div>
        </div>
)}