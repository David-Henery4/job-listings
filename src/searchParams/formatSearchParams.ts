import { SearchParamsTypes } from "@/types/jobTypes";

interface FormattedSearchParamsReturn {
  pathname: "/"
  query?: {
    category: string;
  };
}

const formatSearchParams = (
  newQuery: string,
  { searchParams }: SearchParamsTypes
): FormattedSearchParamsReturn => {
  //
  if (searchParams?.category !== undefined) {
    const currentParamsArray: string[] = searchParams?.category?.split(",");
    const searchParamsNoDuplicates = Array.from(
      new Set([...currentParamsArray, newQuery])
    );
    //
    return {
      pathname: "/",
      query: {
        category: searchParamsNoDuplicates.join(","),
      },
    };
  }
  //
  return {
    pathname: "/",
    query: {
      category: newQuery,
    },
  };
};

export default formatSearchParams;
