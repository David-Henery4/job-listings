# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users can:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![Sceenshot of homepage and filters for jobs are active](/public/screenshot/screenshot-filters.png)

### Links

(Links to be added)
- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Typescript](https://www.typescriptlang.org/) - Strongly typed programming language
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwindcss](https://tailwindcss.com/) - CSS class utility library.


### What I learned

This was a small project and I saw this project as the perfect starting point to start using Typescript.

Typescript is a type-safe, strongly typed programming language, built on javascript and enables us to manage types in our projects. It helps us do things like catching type errors in the editor, rather than catching them at runtime, which would have broken the application. It also gives us better tooling like improved intellsense, so it can help us know exactly what type of value we are going to be using and exactly where we can use it.

In this project I used typescript to mainly create basic type shapes for the projects components and different variables, by using a mix of type aliases and interfaces. I created a main type interface for the "job" data we were getting from the JSON. I then needed to break down that data into other smaller components, I created the types for these components by using the "Pick" utility type to create new types for those components, using the properties from the main "Job" interface. By doing it this way, it creates a link to the main interface and if I needed to change a type for whatever reason, I only had to come the main interface for change to be applied to all the other types linked.

This was only a small basic project which only required a basic use of Typescript and I know I have only touched the surface with Typescript because when I was reading the documentation I was exposed to different advanced Typescript concepts like genrics, which I feel would be overkill for this type of project. Although as I start using Typescript more and start using it in bigger and more complex projects I will start to learn a lot more about Typescript, about it's advanced use-cases, conventions, and using it's more complex features.


Here is my type file used for creating my main types:
```js
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
```


Heres the Jobs list component:
```js
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
```

This is the JobCard component, where I had to break down the data
into smaller components, and also created small types for them,
using the main types from the types file:
```js
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
    <div >
      <div></div>
      <div>
        <Logo logo={logo} />
        <div>
          <Details {...details} />
          <div></div>
          <Tags tags={tags} searchParams={searchParams} />
        </div>
      </div>
    </div>
  );
};

export default JobsCard;

```


### Continued development

This was only a small project and only a small introduction to typescript. Even still, I could see the benefits of using typescript, and I will be using it regularly in future projects.

### Useful resources

- [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - Small introduction into typescript, shows the basics of gettting started and also goes into the concepts and syntax of using typescript.

- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) - Quick rundown of different concepts used in typescript and its relationship to javascript.

- [Do's and Don'ts of Typescript](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html) - Goes into best practices and convensions of using typescript.

## Author

- Website - [Portfolio](https://www.djhwebdevelopment.com)
- Frontend Mentor - [@David-Henery4](https://www.frontendmentor.io/profile/David-Henery4)
- linkedin - [David Henery](https://www.linkedin.com/in/david-henery-725458241/)

