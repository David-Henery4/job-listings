import { Logo, Details, Tags } from "./card-comps";
import { Job, JobDetails, TagTypes } from "@/types/jobTypes";

const JobsCard = ({
  position,
  postedAt,
  location,
  contract,
  logo,
  company,
  featured,
  id,
  languages,
  level,
  role,
  tools,
  new: isNewJob,
}: Job) => {
  const details: JobDetails = {
    position,
    postedAt,
    location,
    contract,
    new: isNewJob,
    featured,
    company,
  };
  //
  const tags: TagTypes = [...tools, ...languages, role, level];
  //
  return (
    <div className="w-full grid grid-rows-cardRows">
      <div className="w-full bg-[#ffffff] shadow-2xl shadow-desaturatedDarkCyan/30 rounded-md border-l-8 border-desaturatedDarkCyan col-start-1 col-end-2 row-start-2 row-end-3"></div>
      <div className="w-full px-6 pb-6 flex flex-col justify-start items-start row-start-1 row-end-3 col-start-1 col-end-2">
        <Logo logo={logo} />
        <div className="w-full mt-2">
          <Details {...details} />
          <div className="w-full h-[1.5px] bg-darkGrayishCyan/25 my-4"></div>
          <Tags tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
