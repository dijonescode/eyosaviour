import Image from "next/image"
import HeroImg from "../../../public/eyosaviour_hero.jpg"
import HeroImg1 from "../../../public/eyosaviour.png"
import Link from "next/link"

export default function Hero() {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
    };
    return <section className="">
        <div className="h-[91.469px] md:h-[117.203px]"></div>
        <div className="w-full h-[300px] md:h-[calc(85vh_-_117.203px)] relative flex items-center">
            <div className="absolute inset-0 z-[1] bg-black opacity-[.6]"></div>
            <Image src={HeroImg} alt="eyo saviour hero" className="absolute w-full h-full object-cover" />

            <div className="max-w-[1200px] w-[90%] mx-auto relative z-[2] flex flex-col gap-[20px]">
                <div>
                    <span className="font-[200] text-[18px] sm:text-[24px] md:text-[40px] text-white">Unlocking Opportunities,</span>
                    <h1 className="text-[50px] md:text-[80px] text-[#fff] leading-[.9] font-[600]">Delivering Excellence</h1>
                </div>
                <Link href="/" className="text-[14px] md:text-[16px] rounded p-[15px_20px] bg-[#000080] text-[#fff] w-[min-content] whitespace-nowrap font-[300] hover:bg-white hover:text-[#000080] flex items-center gap-[10px] group">
                    <span>Make Enquiry</span>
                    <svg className="w-[18px] h-[18px] fill-white group-hover:fill-[#000080]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                </Link>
            </div>
        </div>
    </section>
}