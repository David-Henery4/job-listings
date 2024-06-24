import Image from "next/image";
import {
  DesktopHeaderBackground,
  MobileHeaderBackground,
} from "/public/assets/images/index.ts";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-2xl">Hello</h1>
      <MobileHeaderBackground/>
    </main>
  );
}
