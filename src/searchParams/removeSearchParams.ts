import {
  FormattedSearchParamsReturn,
  SearchParamsTypes,
} from "@/types/jobTypes";

const removeSearchParams = (
  newQuery: string,
  { searchParams }: SearchParamsTypes
): FormattedSearchParamsReturn => {
  //
  let newParams: string[] = [];
  //
  if (searchParams?.category !== undefined) {
    const paramsArray = searchParams?.category.split(",");
    const removedCategory = paramsArray.filter(
      (category) => category !== newQuery
    );
    newParams = removedCategory;
  }
  //
  if (newParams.length <= 0){
    return {
      pathname: "/"
    }
  }
  //
  return {
    pathname: "/",
    query: {
      category: newParams.join(","),
    },
  };
};

export default removeSearchParams;
