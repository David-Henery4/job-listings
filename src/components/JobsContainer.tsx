import { JobsList, JobsFilterTags } from "./jobs-list"
import { SearchParamsTypes } from "@/types/jobTypes"

const JobsContainer = ({searchParams}: SearchParamsTypes) => {
  //
  return (
    <section className="p-6 grid gap-8 smTab:p-10">
      <JobsFilterTags searchParams={searchParams} />
      <JobsList searchParams={searchParams} />
    </section>
  );
}

export default JobsContainer