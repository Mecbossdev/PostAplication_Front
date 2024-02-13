import { PostData } from "@/interfaces/post-data";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000"

const postData = async (data: PostData) => {
  return await axios.post(API_URL + "/admin/auth/user/", data);
}

export function useUsersData() {
  const mutate = useMutation({
    mutationFn: postData,

  })

  return mutate;
}