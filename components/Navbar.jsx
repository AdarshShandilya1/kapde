import Link from "next/link";
import bag_img from "@/public/images/bag_img.png"
import profile_img from "@/public/images/profile_img.png"
import search_img from "@/public/images/search_img.png"
import Image from "next/image";

export default function Navbar(){
    return(
        <div className="p-6 w-full px-8 flex justify-between font-light fixed  z-50 bg-white">
            <div className="flex gap-12"> 
                <Link className="animate-bounce font-normal text-2xl mt-auto" href={"/"}>K A P D E</Link>
                <div className="dropdown relative flex ">
                    <Link className="my-auto link link-underline link-underline-black text-black" href={"/men"}  >MEN</Link>
                    <div className="h-fit w-52 bg-white absolute flex-col p-4 hidden mt-8 shadow-md rounded-md z-10 -left-20">
                         <div className=" hover:text-white hover:bg-black p-2 px-4 rounded-lg cursor-pointer ">T-Shirts</div>
                         <div className=" hover:text-white hover:bg-black p-2 px-4 rounded-lg cursor-pointer">Shirts</div>
                         <div className=" hover:text-white hover:bg-black p-2 px-4 rounded-lg cursor-pointer">Sweatshirts</div>
                         <div className=" hover:text-white hover:bg-black p-2 px-4 rounded-lg cursor-pointer">Bottom</div>
                         <div className=" hover:text-white hover:bg-black p-2 px-4 rounded-lg cursor-pointer">Hoodies</div>
                    </div>
                </div>
                
                <div className="dropdown relative flex">
                    <Link className="my-auto link link-underline link-underline-black text-black" href={"/women"}  >WOMEN</Link>
                    <div className="h-fit w-52 mx-auto bg-white absolute mt-8 flex-col p-4  hidden shadow-md rounded-md z-10 -left-20">
                         <div className=" hover:text-white hover:bg-black p-2 px-4 rounded-lg cursor-pointer">Crop Top</div>
                         <div className=" hover:text-white hover:bg-black p-2 px-4 rounded-lg cursor-pointer">Oversized T-Shirts</div>
                         <div className=" hover:text-white hover:bg-black p-2 px-4 rounded-lg cursor-pointer">Sweatshirts</div>
                         <div className=" hover:text-white hover:bg-black p-2 px-4 rounded-lg cursor-pointer">Bottom</div>
                         <div className=" hover:text-white hover:bg-black p-2 px-4 rounded-lg cursor-pointer">Hoodies</div>
                    </div>
                </div>
            </div>
            {/* <div className="mt-auto hidden lg:visible lg:block">
                <h1></h1>
            </div> */}
            <div className="flex gap-12 ">
                <form className="mt-auto flex">
                    <div className="rounded-l-md border-l border-slate-800 border-y pl-1 ml-2">
                    <Image className="mt-2 mx-2" src={search_img} width={16} height={16} style={{objectFit: "contain"}}/>
                    </div>
                    
                    <input className=" w-full p-1  rounded-r-md border-r border-y border-slate-800 focus:outline-none pl-2 " placeholder="Search" type="input">
                    </input>
                </form>

                <Link className="my-auto " href={"/admin"}>
                    <Image  src={profile_img} width={25} height={25}></Image>
                </Link>
                <Link className="my-auto" href={"/cart"}>
                    <Image  src={bag_img} width={25} height={25}></Image>
                </Link>
            </div>

        </div>
    )
}