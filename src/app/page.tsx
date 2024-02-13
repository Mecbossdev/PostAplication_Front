'use client'

import LayoutComponent from "@/components/layout-component";
import PostList from "@/components/post-list";
import { usePostData } from "@/hooks/usePostData";
import { PostData, PostResponse } from "@/interfaces/post-data";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<PostData[]>([])

  const fetchData = async () => {
    const response = await axios.get("https://localhost:7201/api/Post")
    return setData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <LayoutComponent>
      <h1>home</h1>
    </LayoutComponent>
  );
}
