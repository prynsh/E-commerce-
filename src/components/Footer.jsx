import { Social } from "./Social"

export const Footer= ()=>{
    return(
        <div className="flex pt-10 bg-black text-white justify-evenly">
            <div>
                <div className="pl-10">
                    <div className="pb-4 text-xl font-semibold">
                        Exclusive
                    </div>
                    <div className="pb-5 ">
                        Subscribe
                    </div>
                    <div className="pb-5">
                        Get 10% off the first order
                    </div>
                    <div className="bg-black border-white text-grey-100">
                        <input  placeholder="Enter your email"/>
                    </div>
                </div>
            </div>
            <div>
                    <div className="pb-5 text-xl font-semibold">
                        Support
                    </div>
                    <div>
                        111 Bijoy sarani, Dhaka,
                    <div className="pb-4">
                        DH 1515, Bangladesh.
                    </div>
                    </div>
                    <div className="pb-3">
                        exclusive@gmail.com
                    </div>
                    <div>
                        +88015-88888-9999
                    </div>
            </div>
            <div>
                <div className="pb-4 text-xl font-semibold">
                        Account
                </div>
                <div className="pb-4">
                    My Account
                </div>
                <div className="pb-3">
                    Login/Register
                </div>
                <div className="pb-3">
                    Cart
                </div>
                <div className="pb-3">
                    Wishlist
                </div>
                <div>
                    Shop
                </div>
            </div>
            <div>
                <div className="pb-4 text-xl font-semibold">
                    Quick Link
                </div>
                <div className="pb-4">
                    Privacy Policy
                </div>
                <div className="pb-3">
                    Terms Of Use
                </div>
                <div className="pb-3">
                    FAQ
                </div>
                <div className="pb-3">
                    Contact
                </div>
            </div>
            <div>
                <div className="pb-4 text-xl font-semibold">
                    Download App
                </div>
                <div className="text-gray-400 pb-3">
                Save $3 with App New User Only
                </div>
                <div className="pb-4">
                    <Social/>
                </div>
            </div>
           
        </div>
    )
}