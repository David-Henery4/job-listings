const Details = ({ position, postedAt, location, contract }) => {
  return (
    <div className="grid gap-4">
      <div className="flex justify-start items-center flex-wrap">
        <h3 className="text-lg font-semibold text-desaturatedDarkCyan mr-4">
          Photosnap
        </h3>
        <div className="flex justify-start items-center font-semibold tracking-wide leading-[normal] text-lightGrayishCyanBackground gap-2">
          <div className="bg-desaturatedDarkCyan px-2 py-[10px] rounded-3xl">
            <p className="">NEW!</p>
          </div>
          <div className="px-2 py-[10px] rounded-3xl bg-veryDarkGrayishCyan">
            <p className="">FEATURED</p>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-veryDarkGrayishCyan leading-none">
        {position}
      </h2>

      <div className="text-darkGrayishCyan flex justify-start items-center gap-2">
        <p>{postedAt}</p>
        <div className="w-1 h-1 rounded-full bg-darkGrayishCyan"></div>
        <p>{contract}</p>
        <div className="w-1 h-1 rounded-full bg-darkGrayishCyan"></div>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Details;
