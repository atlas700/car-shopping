import Link from "next/link";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed z-[20] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all ">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center border-b border-zinc-200 h-14">
          <Link href={"/"} className="flex z-40 font-semibold">
            Car<span className="text-rose-600">Shopping</span>
          </Link>

          <div className="flex items-center space-x-4 h-full">
            <Link href={"/"} className={buttonVariants({ size: "sm" })}>
              Get Started
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
