export interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export interface SearchTypes {
  params: {};
  searchParams: { category?: string };
}

export type SearchParamsTypes = Pick<SearchTypes, "searchParams">

export interface FormattedSearchParamsReturn {
  pathname: "/";
  query?: {
    category: string;
  };
}

export type JobDetails = Pick<
  Job,
  "location" | "position" | "postedAt" | "contract" | "new" | "featured" | "company"
>;

export type LogoIcon = Pick<Job, "logo">

export type TagTypes = string[]



// export default Job
