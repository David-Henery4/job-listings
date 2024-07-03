import jobsData from "../../../data.json";
import JobsCard from "./job-card/JobsCard"
import { Job } from "@/types/jobTypes";

const JobsList = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      {jobsData.map((job: Job) => {
        return <JobsCard key={job?.id} {...job}/>
      })}
    </div>
  )
}

export default JobsList