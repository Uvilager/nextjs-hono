"use client";
import { useQuery } from "@tanstack/react-query";

export default function Posts() {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/api/posts/viewer");
      return response.json();
    },
  });

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Posts</h1>
      {data.message && <p className="text-red-500">{data.message}</p>}
    </div>
  );
}
