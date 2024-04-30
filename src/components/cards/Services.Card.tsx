import "./Services.Card.css"
import Image from "next/image"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { AnchorHTMLAttributes, HTMLAttributes } from "react"

interface IServicesCardProps extends HTMLAttributes<HTMLElement> {
    img: StaticImageData;
    name: string;
    desc: string;
    url: string;
    customStyle?: string;
}

// type TServicesCardProps = {
//     img: StaticImageData;
//     name: string;
//     desc: string;
//     url: string;
// }

export default function ServicesCard({ img, name, desc, url, customStyle }: IServicesCardProps) {
    return <Link href={url} className={`h-[285px] w-full cursor-pointer relative overflow-hidden group`}>
        <Image src={img} alt="eyo saviour services" className="w-full h-full object-cover transition group-hover:scale-[1.4]" />
        <div className={`bg-[#000] absolute inset-0 opacity-[.5] group-hover:opacity-[.9] bg-[${customStyle}]`}></div>
        <div className="w-full h-full absolute z-[2] p-[20px] top-0 flex  flex-col gap-[20px]">
            <span className="text-white capitalize text-[16px] md:text-[20px] font-[200]">{name}</span>
            <p className="text-[14px] font-[200] text-white hidden group-hover:block">
                {desc}
            </p>
        </div>
        <div className="text-[14px] font-[200] absolute bottom-[20px] left-[20px] text-white hidden group-hover:block">Click to learn more</div>
    </Link>
}
