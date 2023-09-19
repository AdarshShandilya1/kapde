import Image from "next/image"
import shirt_img from "@/public/images/shirt_img.webp"
export default function Card(props) {
  return (
    <div className=" w-full text-center font-thin">
      <div className=" overflow-hidden w-full rounded-md">
        <Image
          className="hover:scale-110 ease-in-out duration-500"
          src={props.img}
          width={336}
          height={504}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      
      <p className=" text-black m-2 font-thin ">{props.title}</p>
      <p className="mb-2">Rs. {props.price}</p>
      <div className="flex justify-center gap-2">
        <div className="border py-2 w-10 hover:text-white hover:bg-black cursor-pointer">S</div>
        <div className="border py-2 w-10  hover:text-white hover:bg-black cursor-pointer">M</div>
        <div className="border py-2 w-10  hover:text-white hover:bg-black cursor-pointer">L</div>
        <div className="border py-2 w-10  hover:text-white hover:bg-black cursor-pointer">XL</div>
        <div className="border py-2 w-10  hover:text-white hover:bg-black cursor-pointer">XXL</div>
      </div>
    </div>
  )
}
