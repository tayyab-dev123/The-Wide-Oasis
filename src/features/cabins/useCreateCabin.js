import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const {
    isLoading: isCreating,
    mutate: createCabin,
    isPending,
  } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("Cabin created");
      queryClient.invalidateQueries("cabins");
    },
    onError: (error) => {
      toast.error("Error creating cabin");
      console.error(error);
    },
  });
  return { isCreating, createCabin, isPending };
}
