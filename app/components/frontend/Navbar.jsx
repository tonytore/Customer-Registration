import React from 'react'
import SearchForm from '../frontend/SearchForm'
import logo from "../../../public/logo1.jpg";
import Link from 'next/link'
import Image from 'next/image'
import { HelpCircle, User } from 'lucide-react';
import ThemeSwitcherBtn from '../../components/ui/ThemeSwitcherBtn'
import { IoIosMenu, IoIosNotificationsOutline } from "react-icons/io";
import HelpModal from './HelpModal'
const Navbar = () => {
  return (
    <div className='bg-white dark:bg-slate-700 '>
        <div className="flex items-center justify-between py-3 max-w-6xl mx-auto px-8 gap-8">
       {/* Logo */}
        <Link className="" href="/">
          <Image src={logo} alt="limifood logo" className="w-20 h-20 rounded-full object-fit" />
       </Link>

         {/* SEARCH */}
         <div className="flex-grow">
           <SearchForm />
        </div>

        <div className="flex gap-4">
           <Link href='/login' className="flex items-center space-x-1 text-green-950 dark:text-slate-100">
             <User />
            <span>Login</span>
           </Link>
          <HelpModal/>
        </div>
        
        <ThemeSwitcherBtn/>
        
        <Link href='/cart' className="relative text-green-600 text-2xl">
          <IoIosNotificationsOutline className="w-[32px] h-[32px]" />
          <div className="absolute -top-2 pt-1 -left-2 w-6 h-6 rounded-full bg-red-500 text-sm text-white text-center">20</div>
        </Link>
        </div>
     
    </div>
  )
}

export default Navbar

// import React from "react";
// import ThemeSwitcherBtn from "../../components/ui/ThemeSwitcherBtn";
// import Image from "next/image";
// import Link from "next/link";
// import logo from "../../../public/profile.jpg";
// import SearchForm from "../frontend/SearchForm";
// import { HelpCircle, ShoppingCart, User, X } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// export default function Navbar() {
//   return (
//     <div className="bg-gray-50">
//       <div className=" flex items-center justify-between py-3 max-w-7xl mx-auto px-8 gap-8">
//         {/* Logo */}
//         <Link className="" href="/">
//           <Image src={logo} alt="limifood logo" className="w-24" />
//         </Link>
//         {/* SEARCH */}
//         <div className="flex-grow">
//           <SearchForm />
//         </div>
//         {/* 3 ICONS */}
//         <div className="flex gap-4">
//           <button className="flex items-center space-x-1 text-green-950">
//             <User />
//             <span>Login</span>
//           </button>
//           <button className="flex items-center space-x-1 text-green-950">
//             <HelpCircle />
//             <span>Help</span>
//           </button>
//           <DropdownMenu>
//             <DropdownMenuTrigger>
//               <button
//                 type="button"
//                 className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg "
//               >
//                 <ShoppingCart className="text-lime-700 dark:text-lime-500" />
//                 <span className="sr-only">Cart</span>
//                 <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">
//                   20
//                 </div>
//               </button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="py-2 px-4 pr-8">
//               <DropdownMenuLabel>Cart Items</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>
//                 <div className="flex items-center space-x-2">
//                   <Image
//                     src={logo}
//                     alt="User profile"
//                     width={200}
//                     height={200}
//                     className="w-8 h-8 rounded-full"
//                   />
//                   <div className="flex flex-col space-y-1">
//                     <p>Yellow Sweet Corn Stock out, </p>
//                     <div className="flex items-center space-x-2">
//                       <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm ">
//                         Stock Out
//                       </p>
//                       <p>Dec 12 2021 - 12:40PM</p>
//                     </div>
//                   </div>
//                   <button>
//                     <X />
//                   </button>
//                 </div>
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>
//                 <div className="flex items-center space-x-2">
//                   <Image
//                     src="/profile.JPG"
//                     alt="User profile"
//                     width={200}
//                     height={200}
//                     className="w-8 h-8 rounded-full"
//                   />
//                   <div className="flex flex-col space-y-1">
//                     <p>Yellow Sweet Corn Stock out, </p>
//                     <div className="flex items-center space-x-2">
//                       <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm ">
//                         Stock Out
//                       </p>
//                       <p>Dec 12 2021 - 12:40PM</p>
//                     </div>
//                   </div>
//                   <button>
//                     <X />
//                   </button>
//                 </div>
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>
//                 <div className="flex items-center space-x-2">
//                   <Image
//                     src="/profile.JPG"
//                     alt="User profile"
//                     width={200}
//                     height={200}
//                     className="w-8 h-8 rounded-full"
//                   />
//                   <div className="flex flex-col space-y-1">
//                     <p>Yellow Sweet Corn Stock out, </p>
//                     <div className="flex items-center space-x-2">
//                       <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm ">
//                         Stock Out
//                       </p>
//                       <p>Dec 12 2021 - 12:40PM</p>
//                     </div>
//                   </div>
//                   <button>
//                     <X />
//                   </button>
//                 </div>
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//         <ThemeSwitcherBtn />
//       </div>
//     </div>
//   );
// }
