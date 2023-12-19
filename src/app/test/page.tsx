import { Span } from "next/dist/trace";
import { Input } from "postcss";
import React from "react";

// Create Product
export default function Page() {
    return (
        <div>
            <div>
                <h1 className="px-8 pt-8 text-3xl">สินค้าทั้งหมด</h1>
            </div>
            <div className="m-8 overflow-x-auto border shadow-lg elative rounded-xl">
                <div className="pb-4 bg-white border dark:bg-gray-900">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1 mt-4 ml-4">
                        <div className="absolute inset-y-0 flex items-center pointer-events-none rtl:inset-r-0 start-0 ps-3">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" id="table-search" className="block pt-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="สินค้าที่ต้องการหา"/>
                    </div>
                </div>
                <table className="flex flex-col w-full text-left text-gray-500 rtl:text-right dark:text-gray-400">
                        <div className="flex flex-row bg-gray-300">
                            <div className="flex p-4">
                                <div className="items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </div>
                            <div className="pt-4 pl-4 basis-3/6">
                                ชื่อสินค้า
                            </div>
                            <div className="pt-4 basis-1/6">
                                ราคา
                            </div>
                            <div className="pt-4 basis-1/6 ">
                                ราคาโปรโมชั่น  
                            </div>
                            <div className="pt-4 basis-1/6">
                                <a href="#" className="text-base font-light text-black-600 dark:text-gray-500 hover:font-bold hover:text-red-600">แก้ไข/ลบ</a>
                            </div>
                        </div>

                    <tbody>
                        <div className="flex bg-white border-b flex-colpy-14 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <div className="flex px-4 py-14">
                                <div className="items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </div>
                            <div className="pl-4 basis-3/6 pt-14">
                                ชื่อสินค้า
                            </div>
                            <div className="basis-1/6 pt-14">
                                ราคา
                            </div>
                            <div className="basis-1/6 pt-14">
                                ราคาโปรโมชั่น  
                            </div>
                            <div className="basis-1/6 pt-14">
                                <a href="#" className="text-base font-light text-black-600 dark:text-gray-500 hover:font-bold hover:text-red-600 ">แก้ไข/ลบ</a>
                            </div>
                        </div>
                        <div className="flex bg-white border-b flex-colpy-14 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <div className="flex px-4 py-14">
                                <div className="items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </div>
                            <div className="pl-4 basis-3/6 pt-14">
                                ชื่อสินค้า
                            </div>
                            <div className="basis-1/6 pt-14">
                                ราคา
                            </div>
                            <div className="basis-1/6 pt-14 ">
                                ราคาโปรโมชั่น  
                            </div>
                            <div className="basis-1/6 pt-14">
                                <a href="#" className="text-base font-light text-black-600 dark:text-gray-500 hover:font-bold hover:text-red-600">แก้ไข/ลบ</a>
                            </div>
                        </div>
                        <div className="flex bg-white border-b flex-colpy-14 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <div className="flex px-4 py-14">
                                <div className="items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </div>
                            <div className="pl-4 basis-3/6 pt-14">
                                ชื่อสินค้า
                            </div>
                            <div className="basis-1/6 pt-14">
                                ราคา
                            </div>
                            <div className="basis-1/6 pt-14 ">
                                ราคาโปรโมชั่น  
                            </div>
                            <div className="basis-1/6 pt-14">
                                <a href="#" className="text-base font-light text-black-600 dark:text-gray-500 hover:font-bold hover:text-red-600">แก้ไข/ลบ</a>
                            </div>
                        </div>
                        <div className="flex bg-white border-b flex-colpy-14 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <div className="flex px-4 py-14">
                                <div className="items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </div>
                            <div className="pl-4 basis-3/6 pt-14">
                                ชื่อสินค้า
                            </div>
                            <div className="basis-1/6 pt-14">
                                ราคา
                            </div>
                            <div className="basis-1/6 pt-14 ">
                                ราคาโปรโมชั่น  
                            </div>
                            <div className="basis-1/6 pt-14">
                                <a href="#" className="text-base font-light text-black-600 dark:text-gray-500 hover:font-bold hover:text-red-600">แก้ไข/ลบ</a>
                            </div>
                        </div>
                        <div className="flex bg-white border-b flex-colpy-14 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <div className="flex px-4 py-14">
                                <div className="items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </div>
                            <div className="pl-4 basis-3/6 pt-14">
                                ชื่อสินค้า
                            </div>
                            <div className="basis-1/6 pt-14">
                                ราคา
                            </div>
                            <div className="basis-1/6 pt-14 ">
                                ราคาโปรโมชั่น  
                            </div>
                            <div className="basis-1/6 pt-14">
                                <a href="#" className="text-base font-light text-black-600 dark:text-gray-500 hover:font-bold hover:text-red-600">แก้ไข/ลบ</a>
                            </div>
                        </div>
                    </tbody>
                </table>
                <nav className="flex flex-wrap items-center justify-end p-4 bg-gray-300 flex-column md:flex-row" aria-label="Table navigation">
                    <span className="pr-4 font-semibold text-gray-500 dark:text-white">Rows per page: 10</span>
                    <span className="px-4 font-semibold text-gray-500 dark:text-white">1-10 of 276</span>
                    <ul className="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse">
                        <li>
                            <a href="#" className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}