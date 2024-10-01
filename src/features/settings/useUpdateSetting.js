import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast"; // Ensure toast is imported

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { isPending: isUpdatingSetting, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting Updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (error) => {
      toast.error("Error updating setting");
      console.error(error);
    },
  });

  return { updateSetting, isUpdatingSetting };
}
