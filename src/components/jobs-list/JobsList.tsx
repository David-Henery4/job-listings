import jobsData from "../../../data.json";
import JobsCard from "./job-card/JobsCard"
import { Job } from "@/types/jobTypes";

const JobsList = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 max-w-96 mx-auto tab:max-w-[1110px]">
      {jobsData.map((job: Job) => {
        return <JobsCard key={job?.id} {...job} />;
      })}
    </div>
  );
}

export default JobsList