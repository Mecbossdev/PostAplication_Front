export interface PostData {
  id?: number;
  name: string;
  description: string;
}

export interface PostResponse {
  data: PostData;
}