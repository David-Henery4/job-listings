import jobsData from "../../../data.json";
import JobsCard from "./job-card/JobsCard"
import { Job } from "@/types/jobTypes";
import { SearchParamsTypes, TagTypes } from "@/types/jobTypes";

const JobsList = ({searchParams}: SearchParamsTypes) => {
  // let jobsListArray = jobsData
  //
  const handleFilterByParams = () => {
    if (searchParams.category !== undefined){
      const paramsArray = searchParams?.category.split(",")
      //
      const filteredJobs = jobsData.filter((job, i) => {
        const tags: TagTypes = [...job.tools, ...job.languages, job.role, job.level];
        const checkArray = paramsArray.every((query) => tags.includes(query))
        if (checkArray) return job
      })
      //
      return filteredJobs
    }
    return jobsData
  }
  //
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 max-w-96 mx-auto tab:max-w-[1110px]">
      {handleFilterByParams().map((job: Job) => {
        return <JobsCard key={job?.id} {...job} searchParams={searchParams} />;
      })}
    </div>
  );
}

export default JobsList