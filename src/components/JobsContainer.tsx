import { JobsList, JobsFilterTags } from "./jobs-list"

const JobsContainer = () => {
  return (
    <section className="px-6 pb-6">
      <JobsFilterTags/>
      <JobsList/>
    </section>
  )
}

export default JobsContainer