import { PostData } from "@/interfaces/post-data";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const postData = async (data: PostData) => {
  return await axios.post("https://localhost:7201/api/Post", data)
}

export function useMutatePost() {
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"]})
    }
  })

  return mutate;
}