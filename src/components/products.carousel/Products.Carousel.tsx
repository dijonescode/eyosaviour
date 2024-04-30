"use client";

import { StaticImageData } from "next/image";

type TImgProp = {
    img: StaticImageData;
    next: () => void;
    prev: () => void;
}

const ProductsCarousel = ({ img, next, prev }: TImgProp) => {

    return <div className="w-full h-full relative cursor-pointer group">
        <div style={{ backgroundImage: `url(${img.src})` }} className="w-full h-full bg-center bg-cover duration-500"></div>
        <div className="bg-[#000] absolute inset-0 opacity-[.1]"></div>
        <svg onClick={next} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white absolute right-[10px] top-[50%] translate-y-[-50%] z-[1] hidden group-hover:block">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>

        <svg onClick={prev} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white absolute left-[10px] top-[50%] translate-y-[-50%] z-[1] hidden group-hover:block">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>


    </div>

}

export default ProductsCarousel;