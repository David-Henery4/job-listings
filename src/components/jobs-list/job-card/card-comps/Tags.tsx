import { TagTypes } from "@/types/jobTypes";

type TagsProps = {
  tags: TagTypes;
};

const Tags = ({ tags }: TagsProps) => {
  //
  return (
    <div className="flex justify-start items-center flex-wrap gap-4 tab:justify-end tab:flex-[1]">
      {tags.map((category, i) => {
        return (
          <button
            key={i}
            className="bg-lightGrayishCyanBackground py-1 px-2 font-semibold text-desaturatedDarkCyan rounded-md hover:bg-desaturatedDarkCyan hover:text-lightGrayishCyanFilter active:bg-lightGrayishCyanBackground active:text-desaturatedDarkCyan"
          >
            <p>{category}</p>
          </button>
        );
      })}
    </div>
  );
};

export default Tags;
