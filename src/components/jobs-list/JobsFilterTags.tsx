import { RemoveIcon } from "../../../public/assets/images";
import { SearchParamsTypes } from "@/types/jobTypes";
import Link from "next/link";
import removeSearchParams from "@/searchParams/removeSearchParams";

const JobsFilterTags = ({searchParams}: SearchParamsTypes) => {
  //
  const handleSearchParamsArray = () => {
    if (searchParams?.category !== undefined){
      return searchParams?.category.split(",")
    }
    return []
  }
  //
  return (
    <div
      className={`bg-[#ffffff] w-full max-w-96 mx-auto p-6 rounded-md justify-start items-center shadow-2xl shadow-desaturatedDarkCyan/30 gap-3 -mt-[68px] relative tab:-mt-[82px] tab:max-w-[1110px] ${
        handleSearchParamsArray().length >= 1 ? "flex" : "hidden"
      }`}
    >
      <div className="flex-1 flex flex-wrap gap-2">
        {handleSearchParamsArray().map((category, i) => {
          return (
            <Link
              href={removeSearchParams(category, {searchParams})}
              key={i}
              className="bg-lightGrayishCyanFilter inline-flex rounded-md overflow-hidden group"
            >
              <span className="px-3 my-auto text-desaturatedDarkCyan font-semibold">
                {category}
              </span>
              <span className="p-3 h-full bg-desaturatedDarkCyan group-hover:bg-veryDarkGrayishCyan group-active:bg-desaturatedDarkCyan">
                <RemoveIcon />
              </span>
            </Link>
          );
        })}
      </div>
      <div className="">
        <Link
          href="/"
          className="text-darkGrayishCyan font-semibold hover:underline hover:text-desaturatedDarkCyan active:text-darkGrayishCyan"
        >
          Clear
        </Link>
      </div>
    </div>
  );
};

export default JobsFilterTags;
