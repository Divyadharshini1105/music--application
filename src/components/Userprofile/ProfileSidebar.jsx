import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAccountBox } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { MdAddPhotoAlternate } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";



const ProfileSidebar = () => {
    return (
        <aside className='basis-[17%] bg-gray-900 h-[calc(100vh-70px)]'>
            <nav className='w-full'>
                <ul className='w-[full] p-5 flex flex-col'>
                    <li>
                        <NavLink to={"/user/profile/"} className={({isActive})=>`${isActive?"bg-blue-600 hover:bg-blue-700":""} flex items-center gap-2 py-2 px-4 rounded-md cursor-pointer mb-4 font-semibold hover:bg-blue-600`}
                        end>
                        <span className='text-xl'><MdAccountBox/></span>
                        <span>My account</span>
                    </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/user/profile/add-account"}  className={({isActive})=>`${isActive?"bg-blue-600 hover:bg-blue-700":""} flex items-center gap-2 py-2 px-4 rounded-md cursor-pointer mb-4 font-semibold  hover:bg-blue-600`} end>
                        <span className='text-xl'>< FaUserPlus/></span>
                        <span>Add profile</span>
                    </NavLink></li>
                    <li>
                        <NavLink to={"/user/profile/upload-profile-photo"} className={({isActive})=>`${isActive?"bg-blue-600 hover:bg-blue-700":""} flex items-center gap-2 py-2 px-4 rounded-md cursor-pointer mb-4 font-semibold  hover:bg-blue-600`} end>
                        <span className='text-xl'><MdAddPhotoAlternate/></span>
                        <span>Upload profile photo</span>
                    </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/user/profile/change-password"}className={({isActive})=>`${isActive?"bg-blue-600 hover:bg-blue-700":""} flex items-center gap-2 py-2 px-4 rounded-md cursor-pointer mb-4 font-semibold  hover:bg-blue-600`} end>
                        <span className='text-xl'><RiLockPasswordLine/></span>
                        <span>Change password</span>
                    </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/user/profile/delete-account"}className={({isActive})=>`${isActive?"bg-blue-600 hover:bg-blue-700":""} flex items-center gap-2 py-2 px-4 rounded-md cursor-pointer mb-4 font-semibold  hover:bg-blue-600`} end>
                        <span className='text-xl'>< MdDelete/></span>
                        <span>Delete account</span>
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default ProfileSidebar