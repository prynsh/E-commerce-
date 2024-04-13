import { TruckFilled } from "@ant-design/icons"

export const Services=()=>{

    return(
        <div className="grid grid-cols-3">
        <div className="rounded-full px-28 bg-red-500">
            <TruckFilled />
        </div>
        <div className="rounded-full px-28 bg-red-500">
            <TruckFilled />
        </div>
        <div className="rounded-full px-28 bg-red-500">
            <TruckFilled />
        </div>
        </div>
    )
}