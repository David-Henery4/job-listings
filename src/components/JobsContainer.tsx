import { JobsList, JobsFilterTags } from "./jobs-list"
import { SearchParamsTypes } from "@/types/jobTypes"

const JobsContainer = ({searchParams}: SearchParamsTypes) => {
  console.log("Jobs Container: ", searchParams)
  return (
    <section className="p-6 grid gap-8 smTab:p-10">
      <JobsFilterTags/>
      <JobsList searchParams={searchParams}/>
    </section>
  )
}

export default JobsContainer