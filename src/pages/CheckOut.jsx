import { Bottom } from "../components/Bottom"
import { Footer } from "../components/Footer"
import { HeaderWithCart } from "../components/HeaderWithCart"
import { InputBox } from "../components/InputBox"
import { TopBar } from "../components/TopBar"
import { Checkbox } from 'antd';

export const CheckOut=()=>{
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };




    return (
        <div>
            <TopBar/>
            <HeaderWithCart/>
            <div className="grid grid-cols-2 mb-24">
                <div className="flex flex-col justify-center px-24">
                    <div className="rounded-lg bg-white w-auto  p-2 h-max px-4">
                        <div className="font-bold text-3xl mb-5">
                            Billing Details
                        </div>
                        <div className="font-normal mb-5">
                            <InputBox label={"First Name*"} placeholder={""}/>
                            <InputBox label={"Company Name"} placeholder={""}/>
                            <InputBox label={"Street Address*"} placeholder={""}/>
                            <InputBox label={"Apartment,floor,etc.(optional)"} placeholder={""}/>
                            <InputBox label={"Town/City*"} placeholder={""}/>
                            <InputBox label={"Phone Number*"} placeholder={""}/>
                            <InputBox label={"Email Address*"} placeholder={""}/>
                        </div>
                        <div className="flex font-medium w-auto">
                        <Checkbox onChange={onChange}>Save this information for faster check-out next time</Checkbox>
                        </div>

                    </div>
                </div>
                <div>
                    
                </div>

            </div>
            <Footer/>
            <Bottom/>
        </div>
    )
} 