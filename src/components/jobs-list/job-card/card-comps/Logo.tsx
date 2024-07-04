import { PhotosnapLogo } from "../../../../../public/assets/images";
import { LogoIcon } from "@/types/jobTypes";
import dynamic from "next/dynamic";


const Logo = ({ logo }: LogoIcon) => {
  // Works without className, but need to declare inport as ": any", if
  // you want to add classes (With SVGR)
  const CurrentSvg = dynamic(() => import(`/public/assets/images/${logo}`));
  //
  return (
    <div className="w-16 h-16 tab:w-[88px] tab:h-[88px]">
      <CurrentSvg
      // className="w-full h-full"
      />
      {/* <PhotosnapLogo className="w-full h-full" /> */}
    </div>
  );
};

export default Logo;
