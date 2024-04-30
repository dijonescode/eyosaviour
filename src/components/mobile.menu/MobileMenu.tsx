import Link from "next/link";
import { links } from "@/utils/links";
type TMobileMenu = {
    showMobileMenu: boolean;
    step: number;
    submenu: { name: string; url: string; }[] | null;
    chooseStep: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, submenu: { name: string; url: string; }[]) => void;
    closeMenu: () => void;
}

export default function MobileMenu({ showMobileMenu, step, submenu, chooseStep, closeMenu }: TMobileMenu) {
    return <div className={`fixed top-[91.469px] md:top-[117.203px] w-full h-full z-[3] ${showMobileMenu ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black opacity-[.6]"></div>

        {step === 0 ? <div className="w-[100%] mx-auto p-[20px] absolute top-[3px] bg-white flex flex-col gap-[10px]">
            {links.map(_link => _link.submenu ? <div onClick={(e) => chooseStep(e, _link.submenu)} className="text-[14px] font-[300] capitalize text-[#000080] flex items-center gap-[5px]" key={_link.name}>
                <span>{_link.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#000080]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>


            </div> : <Link onClick={closeMenu} href={_link.url} key={_link.name} className="text-[14px] font-[300] capitalize text-[#000080]">{_link.name}</Link>)}
            <Link href="/" className="p-[10px_20px] bg-[#000080] text-white text-[14px] font-[200] w-[min-content] whitespace-nowrap rounded">Make enquiry</Link>
        </div> : <div className="w-[100%] mx-auto p-[20px] absolute top-[3px] bg-white flex flex-col gap-[10px]">
            {submenu?.map(_submenu => <Link onClick={closeMenu} href={_submenu.url} key={_submenu.name} className="text-[14px] font-[300] capitalize text-[#000080]">{_submenu.name}</Link>)}
        </div>}
    </div>
}