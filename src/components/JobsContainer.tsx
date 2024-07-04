import { JobsList, JobsFilterTags } from "./jobs-list"

const JobsContainer = () => {
  return (
    <section className="p-6 grid gap-8 smTab:p-10">
      <JobsFilterTags/>
      <JobsList/>
    </section>
  )
}

export default JobsContainer