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
                <table className="w-full text-left text-gray-500 rtl:text-right dark:text-gray-400">
                    <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="bg-gray-300">
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ชื่อผู้ใช้
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                วันที่ลงทะเบียน
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ตำแหน่ง
                            </th>
                            <th scope="col" className="px-6 py-3">
                                แก้ไข/ลบ 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 text-base font-normal py-14">
                                JEFF
                            </th>
                            <td className="px-6 py-4 text-base font-normal">
                                jeff@gmail.com
                            </td>
                            <td className="px-6 py-4 text-base font-normal">
                                01/02/2566
                            </td>
                            <td className="px-6 py-4 text-base font-normal">
                                MEMBER
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="text-base font-normal text-black-600 dark:text-gray-500 hover:font-bold hover:text-red-600">แก้ไข/ลบ</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 text-base font-normal py-14">
                                LISA
                            </th>
                            <td className="px-6 py-4 text-base font-normal">
                                lisa@gmail.com
                            </td>
                            <td className="px-6 py-4 text-base font-normal">
                                02/02/2566
                            </td>
                            <td className="px-6 py-4 text-base font-normal">
                                MEMBER
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="text-base font-normal text-black-600 dark:text-gray-500 hover:font-bold hover:text-red-600">แก้ไข/ลบ</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 text-base font-normal py-14">
                                DEX
                            </th>
                            <td className="px-6 py-4 text-base font-normal">
                                dex@gmail.com
                            </td>
                            <td className="px-6 py-4 text-base font-normal">
                                01/03/2566
                            </td>
                            <td className="px-6 py-4 text-base font-normal">
                                MEMBER
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="text-base font-normal text-black-600 dark:text-gray-500 hover:font-bold hover:text-red-600">แก้ไข/ลบ</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 text-base font-normal py-14">
                                HANI
                            </th>
                            <td className="px-6 py-4 text-base font-normal">
                                hani@gmail.com
                            </td>
                            <td className="px-6 py-4 text-base font-normal">
                                02/03/2566
                            </td>
                            <td className="px-6 py-4 text-base font-normal">
                                MEMBER
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="text-base font-normal text-black-600 dark:text-gray-500 hover:font-bold hover:text-red-600">แก้ไข/ลบ</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 text-base font-normal py-14">
                                WONYOUNG
                            </th>
                            <td className="px-6 py-4 text-base font-normal">
                                wonyoung@gmail.com
                            </td>
                            <td className="px-6 py-4 text-base font-normal">
                                05/06/2566
                            </td>
                            <td className="px-6 py-4 text-base font-normal">
                                MEMBER
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="text-base font-normal text-black-600 dark:text-gray-500 hover:font-bold hover:text-red-600">แก้ไข/ลบ</a>
                            </td>
                        </tr>
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