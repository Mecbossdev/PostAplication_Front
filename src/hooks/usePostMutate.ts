import { PostData } from "@/interfaces/post-data";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const postData = async (data: PostData) => {
  return await axios.post("https://localhost:7201/api/Post");
}

export function useUsersData() {
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: postData,
  })

  return mutate;
}