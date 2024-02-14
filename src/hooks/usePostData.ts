'use client'
import { PostData } from "@/interfaces/post-data";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchData = async () => {
  const data  = await axios.get("https://localhost:7201/api/Post");
  const response = await data.data
  return response as PostData[]
}

export function useQueryPost() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey:["posts"]
  })

  return query
}

