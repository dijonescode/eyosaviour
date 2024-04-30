import ServicesCard from "@/components/cards/Services.Card";
import Hero from "@/components/hero/Hero";
import Title from "@/components/title/Title";
import { productsAndServices } from "@/utils/products.services";
import Link from "next/link"

export default function Home() {
  return (
    <main className="">
      <Hero />
      <section>
        <div className="max-w-[1200px] w-[90%] mx-auto py-[30px] md:py-[80px]">
          <div className="mb-[20px]">
            <Title txt="About us" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] md:gap-[50px] mb-[20px] md:mb-[60px]">
            <div className="flex flex-col gap-[15px]">
              <p className="font-[200] text-[18px] md:text-[20px] xl:text-[22px] text-[#000080] leading-[1.4]">EyoSaviour Enterprise is a dynamic and innovative company operating in the realm of building materials procurement, real estate investment, and landed properties. </p>
              <p className="text-zinc-700 leading-[1.6] font-[200] text-[14px] md:text-[16px]">
                With a commitment to excellence and a customer-centric approach, we have established ourselves as a trusted partner in the construction and real estate industries.</p>
              <Link href="/about-us" className="text-[14px] font-[200] p-[10px_20px] bg-[#000080] text-white w-[min-content] whitespace-nowrap">Learn more</Link>
            </div>
            <div className="w-full h-[100%] md:h-[300px]">
              <video controls className="w-full h-full">
                <source src="/vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[40px] w-[100%] lg:w-[1000px]">
            <div className="flex flex-col gap-[10px]">
              <svg className="w-[40px] h-[40px] fill-[#000080]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 32h32c17.7 0 32 14.3 32 32V96H96V64c0-17.7 14.3-32 32-32zm64 96V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V388.9c0-34.6 9.4-68.6 27.2-98.3C40.9 267.8 49.7 242.4 53 216L60.5 156c2-16 15.6-28 31.8-28H192zm227.8 0c16.1 0 29.8 12 31.8 28L459 216c3.3 26.4 12.1 51.8 25.8 74.6c17.8 29.7 27.2 63.7 27.2 98.3V448c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V128h99.8zM320 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V96H320V64zm-32 64V288H224V128h64z" /></svg>

              <p className="font-[200] leading-[1.6] text-zinc-700 text-[14px] md:text-[16px]">Our vision at EyoSaviour Enterprise is to be a leading force in revolutionizing the building materials and real estate sectors. We aspire to set new standards of quality, reliability, and sustainability, contributing significantly to the development of communities and the enhancement of living standards.</p>
            </div>

            <div className="flex flex-col gap-[10px]">
              <svg className="w-[40px] h-[40px] fill-[#000080]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M256 32H181.2c-27.1 0-51.3 17.1-60.3 42.6L3.1 407.2C1.1 413 0 419.2 0 425.4C0 455.5 24.5 480 54.6 480H256V416c0-17.7 14.3-32 32-32s32 14.3 32 32v64H521.4c30.2 0 54.6-24.5 54.6-54.6c0-6.2-1.1-12.4-3.1-18.2L455.1 74.6C446 49.1 421.9 32 394.8 32H320V96c0 17.7-14.3 32-32 32s-32-14.3-32-32V32zm64 192v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32z" /></svg>

              <p className="font-[200] leading-[1.6] text-zinc-700 text-[14px] md:text-[16px]">Our mission is to provide unparalleled value to our clients by offering top-notch building materials, expert real estate advice, and investment opportunities that yield sustainable returns. We aim to foster long-term partnerships built on integrity, transparency, and mutual respect while consistently exceeding expectations.</p>
            </div>

            <div className="flex flex-col gap-[10px]">
              <svg className="w-[40px] h-[40px] fill-[#000080]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" /></svg>

              <ul className="font-[200] leading-[1.6] text-zinc-700 list-disc ml-[20px] text-[14px] md:text-[16px]">
                <li>Excellence</li>
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Collaboration</li>
                <li>Sustainability</li>
                <li>Customer focus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[1200px] w-[90%] mx-auto py-[30px] md:py-[80px]">
          <div className="mb-[20px]">
            <Title txt="Products & Services" />
          </div>

          <p className="text-zinc-700 font-[200] max-w-[900px] w-[100%] text-[14px] md:text-[16px] leading-[1.6]">EyoSaviour Enterprise offers premium building materials, expert real estate investment guidance, and lucrative opportunities in landed properties. Your trusted partner in construction and investment success</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[40px]">
            <div className="bg-[#000080] w-full h-[285px] p-[20px]">
              <p className="text-white font-[300]">Products <br /> & Services</p>
            </div>
            {productsAndServices.map(prodAndServ => <ServicesCard key={prodAndServ.name} name={prodAndServ.name} desc={prodAndServ.desc} img={prodAndServ.img} url={prodAndServ.url} customStyle={prodAndServ.customStyle} />)}


          </div>
        </div>
      </section>

      {/* Map & Address */}
      <section className="relative w-full h-[200px] md:h-[450px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507364.94298071414!2d2.6600175147045424!3d6.548352877650206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1714295110482!5m2!1sen!2sng" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </main>
  );
}
