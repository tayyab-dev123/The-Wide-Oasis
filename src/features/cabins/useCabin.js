import { useQuery } from "@tanstack/react-query";
import { getApiCabins } from "../../services/apiCabins";

export function useCabin() {
  const {
    data: cabin,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getApiCabins,
  });
  console.log("cabin", cabin);
  return { cabin, isLoading, error };
}
