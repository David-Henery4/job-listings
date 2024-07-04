import Image from "next/image";
import {
  DesktopHeaderBackground,
  MobileHeaderBackground,
} from "../../public/assets/images";
import {JobsContainer} from "@/components"

export default function Home() {
  return (
    <main className="">
      <div className="bg-desaturatedDarkCyan w-full h-[156px]">
        <MobileHeaderBackground className="w-full h-full lap:hidden" />
        <DesktopHeaderBackground className="w-full h-full hidden lap:block" />
      </div>
      <JobsContainer />
    </main>
  );
}
