import jobsData from "../../../data.json";
import JobsCard from "./job-card/JobsCard"

const JobsList = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      {jobsData.map((job) => {
        return <JobsCard key={job?.id} {...job}/>
      })}
    </div>
  )
}

export default JobsList