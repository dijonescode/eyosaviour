import Image from "next/image"

export default function Contacts() {
    return <main>
        <section className="">
            <div className="h-[91.469px] md:h-[117.203px]"></div>
            <div className="h-[300px] md:h-[calc(100vh_-_117.203px)]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507364.94298071414!2d2.6600175147045424!3d6.548352877650206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1714295110482!5m2!1sen!2sng" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>

        <section>
            <div className="max-w-[900px] w-[90%] mx-auto py-[30px] md:py-[80px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[80px]">
                    <p className="text-[14px] font-[200]">52, Igi Olugbin Street, Ladi Lak <br /> Bariga, Lagos <br /><b>E</b>: eyosaviour_enterprises1@outlook.com <br /><b>T</b>: +234 (0) 906 786 1768, <br className="block md:hidden" /> +234 (0) 916 988 6607</p>

                    <form className="shadow p-[20px] flex flex-col gap-[20px]">
                        <span className="text-[18px] md:text-[24px] font-[200] text-zinc-700">Contact form</span>
                        <input type="text" className="p-[10px] w-full border" placeholder="Enter your name" />
                        <input type="email" className="p-[10px] w-full border" placeholder="Enter your email" />
                        <input type="text" className="p-[10px] w-full border" placeholder="Subject" />
                        <textarea name="message" className="p-[10px] w-full border" placeholder="Message"></textarea>
                        <button className="w-[min-content] p-[10px_20px] bg-[#000080] text-white font-[200] rounded">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    </main>
}