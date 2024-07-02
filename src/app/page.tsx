import Image from "next/image";
import {
  DesktopHeaderBackground,
  MobileHeaderBackground,
} from "../../public/assets/images";

export default function Home() {
  return (
    <main className="">
      <div className="bg-desaturatedDarkCyan w-full h-[156px]">
        <MobileHeaderBackground className="w-full h-full" />
      </div>
    </main>
  );
}
