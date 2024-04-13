import { CopyrightOutlined } from "@ant-design/icons"

export function Bottom(){
    return(
        <div className=" flex text-gray-500 justify-center bg-black pt-14">
        <div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
        <div className=" pr-2">
        <CopyrightOutlined />
        </div>
        <div>
            Copyright Rimel 2022.All right reserved
            </div>
        </div>
    )
}