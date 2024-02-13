'use client'
import { PostData, PostResponse } from "@/interfaces/post-data";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = "https://localhost:7201/api/Post"

const fetchData = async () => {
  const { data } = await axios.get("https://localhost:7201/api/Post");
  return data.data as PostData[];
}

export function usePostData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['post-data']
    
  })

  return {
    ...query,
    data: query?.data
  }
}