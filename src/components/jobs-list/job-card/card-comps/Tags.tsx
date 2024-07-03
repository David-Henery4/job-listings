import { TagTypes } from "@/types/jobTypes";

type TagsProps = {
  tags: TagTypes;
};

const Tags = ({ tags }: TagsProps) => {
  //
  return (
    <div className="flex justify-start items-center flex-wrap gap-4">
      {tags.map((category, i) => {
        return (
          <button key={i} className="bg-lightGrayishCyanBackground p-2 font-semibold text-desaturatedDarkCyan hover:cursor-pointer rounded-md hover:scale-105 active:scale-100">
            <p>{category}</p>
          </button>
        );
      })}
    </div>
  );
};

export default Tags;
