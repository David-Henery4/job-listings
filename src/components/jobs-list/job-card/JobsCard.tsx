import { Logo, Details, Tags } from "./card-comps";
import { Job, JobDetails, TagTypes, SearchParamsTypes } from "@/types/jobTypes";

type JobWithSearchParams = Job & SearchParamsTypes

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
  searchParams
}: JobWithSearchParams) => {
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
  // max-w-96 mx-auto
  return (
    <div className="w-full grid grid-rows-cardRows tab:grid-rows-[auto]">
      <div className="w-full bg-[#ffffff] shadow-2xl shadow-desaturatedDarkCyan/30 rounded-md border-l-8 border-desaturatedDarkCyan col-start-1 col-end-2 row-start-2 row-end-3 tab:row-start-1 tab:row-end-2"></div>
      <div className="w-full px-6 pb-6 flex flex-col justify-start items-start row-start-1 row-end-3 col-start-1 col-end-2 tab:row-start-1 tab:row-end-2 tab:p-8 tab:flex-row tab:gap-6 tab:items-center">
        <Logo logo={logo} />
        <div className="w-full mt-2 tab:flex tab:justify-between tab:items-center tab:flex-[1] tab:m-0">
          <Details {...details} />
          <div className="w-full h-[1.5px] bg-darkGrayishCyan/25 my-4 tab:hidden"></div>
          <Tags tags={tags} searchParams={searchParams} />
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
