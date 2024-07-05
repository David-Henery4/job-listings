import { TagTypes, SearchParamsTypes } from "@/types/jobTypes";
import Link from "next/link";
import formatSearchParams from "@/searchParams/formatSearchParams";

type TagsProps = {
  tags: TagTypes;
} & SearchParamsTypes

const Tags = ({ tags, searchParams }: TagsProps) => {
  //
  return (
    <div className="flex justify-start items-center flex-wrap gap-4 tab:justify-end tab:flex-[1]">
      {tags.map((category, i) => {
        return (
          <Link
            href={formatSearchParams(category, {searchParams})}
            key={i}
            className="bg-lightGrayishCyanBackground py-1 px-2 font-semibold text-desaturatedDarkCyan rounded-md hover:bg-desaturatedDarkCyan hover:text-lightGrayishCyanFilter active:bg-lightGrayishCyanBackground active:text-desaturatedDarkCyan"
          >
            <p>{category}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Tags;
