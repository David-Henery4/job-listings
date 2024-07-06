import {
  DesktopHeaderBackground,
  MobileHeaderBackground,
} from "../../public/assets/images";
import {JobsContainer} from "@/components"
import { SearchTypes } from "@/types/jobTypes";

export default function Home({searchParams}: SearchTypes) {
  //
  return (
    <main className="">
      <div className="bg-desaturatedDarkCyan w-full h-[156px]">
        <MobileHeaderBackground className="w-full h-full lap:hidden" />
        <DesktopHeaderBackground className="w-full h-full hidden lap:block" />
      </div>
      <JobsContainer searchParams={searchParams} />
    </main>
  );
}
