import Image from "next/image"
import AboutUsHero from "../../../public/eyosaviour_hero.jpg"
import Title from "@/components/title/Title";
import Link from "next/link"

const About = () => {
    return <main>
        <section className="">
            <div className="h-[91.469px] md:h-[117.203px]"></div>
            <div className="w-full h-[300px] md:h-[calc(85vh_-_117.203px)] relative flex items-center">
                <div className="absolute inset-0 z-[1] bg-black opacity-[.6]"></div>
                <Image src={AboutUsHero} alt="eyo saviour hero" className="absolute w-full h-full object-cover" />
                <div className="max-w-[1200px] w-[90%] mx-auto relative z-[2] flex flex-col gap-[20px]">
                    <div>
                        <h1 className="text-[50px] md:text-[80px] text-[#fff] leading-[.9] font-[600]">About us</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="max-w-[1200px] w-[90%] mx-auto py-[30px] md:py-[80px]">
                <Title txt="eyo saviour enterprise" />

                <div className="relative mt-[40px] grid grid-cols-1 md:grid-cols-[1fr_250px] lg:grid-cols-[1fr_400px] gap-[30px] md:gap-[60px]">
                    <div>
                        <p className="font-[200] text-zinc-600 text-[14px] md:text-[16px]">
                            <span className="text-[18px] md:text-[22px]">EyoSaviour Enterprise is a dynamic and innovative company operating in the realm of building materials procurement, real estate investment, and landed properties.</span> <br /><br />

                            With a commitment to excellence and a customer-centric approach, we have established ourselves as a trusted partner in the construction and real estate industries. <br /><br />
                        </p>

                        <div className="mb-[20px]">
                            <span className="font-[500] text-zinc-600">Vision:</span>
                            <p className="font-[200] text-zinc-600 text-[14px] md:text-[16px]">
                                Our vision at EyoSaviour Enterprise is to be a leading force in revolutionizing the building materials and real estate sectors. We aspire to set new standards of quality, reliability, and sustainability, contributing significantly to the development of communities and the enhancement of living standards.
                            </p>
                        </div>

                        <div className="mb-[20px]">
                            <span className="font-[500] text-zinc-600">Mission:</span>
                            <p className="font-[200] text-zinc-600 text-[14px] md:text-[16px]">
                                Our vision at EyoSaviour Enterprise is to be a leading force in revolutionizing the building materials and real estate sectors. We aspire to set new standards of quality, reliability, and sustainability, contributing significantly to the development of communities and the enhancement of living standards.
                            </p>
                        </div>

                        <div className="mb-[20px]">
                            <span className="font-[500] text-zinc-500">Core Values:</span>
                            <ul className="font-[200] text-zinc-500 text-[14px] md:text-[16px] list-disc ml-[20px]">
                                <li>Integrity: We uphold the highest ethical standards in all our dealings, ensuring honesty, transparency, and accountability in every transaction.</li>
                                <li>Excellence: We are committed to delivering excellence in every aspect of our operations, from product quality to customer service, striving for continuous improvement and innovation.</li>
                                <li>Customer Satisfaction: Our customers are at the heart of everything we do. We prioritize their needs and preferences, striving to exceed their expectations and build lasting relationships based on trust and satisfaction.</li>
                                <li>Community Impact: We recognize our responsibility to the communities we serve. Through sustainable practices and community engagement, we aim to make a positive impact on society and contribute to its growth and prosperity.</li>
                                <li>Teamwork: We believe in the power of collaboration and synergy. By fostering a culture of teamwork, respect, and empowerment, we harness the collective talents and expertise of our team to achieve shared goals and drive success.</li>
                            </ul>
                        </div>

                        <p className="font-[200] text-zinc-600 text-[14px] md:text-[16px]">
                            At EyoSaviour Enterprise, we are dedicated to realizing our vision, fulfilling our mission, and upholding our core values as we continue to grow and make a meaningful impact in the building materials and real estate sectors.
                        </p>
                    </div>

                    <div className="">
                        <p className="text-[14px] text-zinc-500 font-[200]">52, Igi Olugbin Street <br /> Ladi Lak, Bariga, Lagos <br /> <b>E</b>: info@eyosaviourenterprise.com <br /><b>T</b>: +234 (0) 802 894 3665, <br className="block md:hidden" /> +234 (0) 802 894 3665</p>

                        <div className="mt-[10px] flex gap-[5px]">
                            <Link href="https://twitter.com">
                                <svg className="text-[20px] h-[20px] fill-zinc-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                            </Link>

                            <Link href="https://instagram.com">
                                <svg className="w-[20px] h-[20px] fill-zinc-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                            </Link>

                            <svg className="w-[20px] h-[20px] fill-zinc-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    </main>
}

export default About;