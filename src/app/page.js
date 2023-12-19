import { Icon } from '@iconify/react';
import { Span } from "next/dist/trace";
import { Input } from "postcss";

// Create Product
export default function Page() {
    return (
        <div>
            <div>
                <h1 className="p-8 text-3xl">สร้างสินค้า</h1>
            </div>

            <div className="pb-4 pl-8 pr-8">
                <div className="pb-4 pl-8 pr-8 border-b-2 border-black ">
                    <button className="pt-4 pr-8 text-xl font-bold"> ไทย </button>
                    <button className="px-6 text-xl"> อังกฤษ </button>
                </div>
            </div>

            <div className="flex-col pt-8 pb-10">
                <span className="p-8"> ชื่อสินค้า </span>
                <div className="pt-2 pl-8 pr-8 "><input type="text" placeholder="ชื่อสินค้า" class="bg-white-200 border-2 w-full rounded-md p-3 "/></div>
            </div>

            <div className="flex-col pb-10">
                <span className="p-8"> หมวดหมู่ </span>
                <div className="pt-2 pl-8 pr-8 "><input type="text" placeholder="หมวดหมู่" class="p-3 bg-white-200 border-2 w-full rounded-md"/></div>
            </div>
            
            <div className="flex pb-10">
                <div className="flex-1">
                    <span className="p-8"> ราคาสินค้า </span>
                    <div className="pt-2 pl-8 pr-8 "><input type="text" placeholder="ราคาสินค้า" class="p-3 w-full bg-white-200 border-2 rounded-md"/></div>
                </div>
                <div className="flex-1">
                    <span className="p-8"> จำนวนสินค้าที่อยู่ในสต็อก </span>
                    <div className="pt-2 pl-8 pr-8 "><input type="text" placeholder="  จำนวนสินค้าที่อยู่ในสต็อก" class="p-3 w-full pbg-white-200 border-2 rounded-md"/></div>
                </div>
            </div>

            <div className="pb-2 pl-8 "> โปรโมชั่น </div>
            <div class="flex items-center pb-8 ">
                <div className="pl-8">
                    <input type="radio" id="radioButton" name="example" className="bg-green-500"/>
                    <span class="text-gray-700 pl-2 ">ไม่มีโปรโมชั่น</span>
                </div>

                <div className="pl-8">
                    <input type="radio" id="radioButton1" name="example" className="accent-green-500/25"/>
                    <label for="radioButton1" class="cursor-pointer active:bg-green-500"></label>
                    <span class="text-gray-700 pl-2">โปรโมชั่น</span>
                </div>
            </div>

            <div className="flex-col pb-10">
                <span className="p-8"> ราคาโปรโมชั่น </span>
                <div className="px-8">
                    <input type="text" placeholder="  ราคาโปรโมชั่น" class="p-3 bg-white-200 border-2 w-full rounded-md "/></div>
            </div>

            <div className="flex-col pb-10">
                <span className="p-8"> คำอธิบายสินค้า </span>
                <div className="pt-2 pl-8 pr-8 ">
                    <input type="text" id="textBox" name="textBox" class="mt-1 p-32 w-full border rounded-md" placeholder="   คำอธิบายสินค้า"/></div>
            </div>
            
            <div className="flex-col pb-10">
                <span className="p-8"> น้ำหนักสินค้า </span>
                <div className="pt-2 pl-8 pr-8">
                    <input type="text" placeholder="  น้ำหนักสินค้าหน่วยกิโลกรัม" class="p-3 bg-white-200 border-2 w-full rounded-md"/></div>
            </div>
            
            <div className="pb-8 pl-8 pr-8">
                <span className="flex pb-4"> อัพโหลดรูปภาพหลัก (1 รูป) </span>
                <div className="flex flex-col border border-current border-dashed h-96 rounded-xl" >
                    <Icon icon="ep:upload-filled" />
                    <div className="pt-40 text-xs font-semibold text-center ">Select a file or drag and drop here</div>
                    <div className="pt-4 text-xs font-light text-center ">JPG, PNG or PDF, file size no more than 10MB </div>
                    <div className="grid pt-6 justify-items-center">
                        <button className="px-4 py-3 border border-solid rounded-xl border-cyan-400">
                        <p className="text-xs font-medium text-cyan-400">SELECT FILE</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="pb-8 pl-8 pr-8">
                <span className="flex pb-4 font-medium"> อัพโหลดรูปรอง </span>
                <div className="flex flex-col border border-current border-dashed h-96 rounded-xl" >
                    <div className="pt-40 text-xs font-semibold text-center ">Select a file or drag and drop here</div>
                    <div className="pt-4 text-xs font-light text-center ">JPG, PNG or PDF, file size no more than 10MB </div>
                    <div className="grid pt-6 justify-items-center">
                        <button className="px-4 py-3 border border-solid rounded-xl border-cyan-400">
                        <p className="text-xs font-medium text-cyan-400">SELECT FILE</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex pt-32">
                <div className="grid flex-auto px-20 py-40 justify-items-start">
                    <button className="px-6 py-3 ">
                        ยกเลิก
                    </button>
                </div>
                <div className="grid flex-auto px-8 py-40 justify-items-end">
                    <button className="border-2 border-solid shadow-2xl rounded-xl">
                    <p className="px-6 py-3 font-medium text-md text-cyan-600"> ต่อไป </p>
                    </button>
                </div>
            </div>

        </div>
    )
}
