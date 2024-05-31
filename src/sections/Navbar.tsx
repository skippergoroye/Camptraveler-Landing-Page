import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "@/components/Button";

const Navbar = () => {
  return (
   
    <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 2xl:px-0 relative z-30 py-5">
       <h1>jfjjfjf</h1>
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-[16px] font-[400] text-gray-50 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex items-center justify-center">
        <Button type="button" icon="/user.svg" variant="btn_dark_green" title={"Login"} />
      </div>

      <Image src="menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden" />
    </nav>
  );
};

export default Navbar;

