import { RemoveIcon } from "../../../public/assets/images";

const JobsFilterTags = () => {
  return (
    <div className="hidden bg-[#ffffff] w-full max-w-96 mx-auto p-6 rounded-md flex justify-start items-center shadow-2xl shadow-desaturatedDarkCyan/30 gap-3 -mt-[68px] relative tab:-mt-[82px] tab:max-w-[1110px]">
      <div className="flex-1 flex flex-wrap gap-2">
        <button className="bg-lightGrayishCyanFilter inline-flex rounded-md overflow-hidden group">
          <span className="px-3 my-auto text-desaturatedDarkCyan font-semibold">
            Frontend
          </span>
          <span className="p-3 h-full bg-desaturatedDarkCyan group-hover:bg-veryDarkGrayishCyan group-active:bg-desaturatedDarkCyan">
            <RemoveIcon />
          </span>
        </button>
      </div>
      <div className="">
        <button className="text-darkGrayishCyan font-semibold hover:underline hover:text-desaturatedDarkCyan active:text-darkGrayishCyan">
          Clear
        </button>
      </div>
    </div>
  );
};

export default JobsFilterTags;
