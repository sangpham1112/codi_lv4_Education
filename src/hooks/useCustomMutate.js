import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCustomMutate = (key, fn) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: fn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
  return mutation;
};
